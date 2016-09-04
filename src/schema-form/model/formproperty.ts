import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import "rxjs/add/observable/combineLatest";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
import "rxjs/add/operator/distinctUntilChanged";
import { SchemaValidatorFactory } from "../schemavalidatorfactory";
import { ValidatorRegistry } from "./validatorregistry";
import { PropertyGroup } from "./propertygroup";

export abstract class FormProperty {
	public schemaValidator: Function;
	public required: boolean;

	protected _value: any = null;
	protected _errors: any = null ;
	private _valueChanges = new BehaviorSubject<any>(null);
	private _errorsChanges = new BehaviorSubject<any>(null);
	private _visible = true;
	private _visibilityChanges = new BehaviorSubject<boolean>(true);
	private _root: PropertyGroup;
	private _parent: PropertyGroup;
	private _path: string;

	constructor(
		schemaValidatorFactory: SchemaValidatorFactory,
		private validatorRegistry: ValidatorRegistry,
		public schema: any,

		parent: PropertyGroup,
		path: string
	) {
		this.schemaValidator = schemaValidatorFactory.createValidatorFn(this.schema);

		this._parent = parent;
		if (parent) {
			this._root = parent.root;
		} else if (this instanceof PropertyGroup) {
			this._root = <PropertyGroup><any>this;
		} else {
			throw new Error("")
		}
		this._path = path;
	}

	public get valueChanges() {
		return this._valueChanges;
	}

	public get errorsChanges() {
		return this._errorsChanges;
	}

	public get type(): string {
		return this.schema.type;
	}

	public get parent(): PropertyGroup {
		return this._parent;
	}

	public get root(): PropertyGroup {
		return this._root || <PropertyGroup><any>this;
	}

	public get path(): string {
		return this._path;
	}

	public get value() {
		return this._value;
	}

	public get visible() {
		return this._visible;
	}

	public get valid() {
		return this._errors === null;
	}

	public abstract setValue(value: any, onlySelf: boolean);

	abstract reset(value: any, onlySelf : boolean)

	protected updateValueAndValidity(onlySelf = false, emitEvent = true) {
		this.updateValue();

		if (emitEvent) {
			this.valueChanges.next(this.value);
		}

		this.runValidation();

		if (this.parent && !onlySelf) {
			this.parent.updateValueAndValidity(onlySelf, emitEvent);
		}

	}

	protected abstract updateValue();

	private runValidation() : any {
		let errors = this.schemaValidator(this._value) || [];
		let customValidator = this.validatorRegistry.get(this.path);
		if (customValidator) {
			let customErrors = this.validatorRegistry.get(this.path)(this.value, this, this.findRoot()) ;
			errors.push(...( customErrors || []));
		}
		if (errors.length === 0) {
			errors = null;
		}

		this._errors = errors;
		this.setErrors(this._errors);
	}

	private setErrors(errors) {
		this._errors = errors;
		this._errorsChanges.next(errors);
	}

	protected searchProperty(path: string): FormProperty {
		let prop: FormProperty = this;
		let base: PropertyGroup = null;

		let result = null;
		if (path[0] === '/') {
			base = this.findRoot();
			result = base.getProperty(path.substr(1));
		} else {
			while(result === null && prop.parent !== null) {
				prop = base = prop.parent;
				result = base.getProperty(path);
			}
		}
		return result;
	}

	public findRoot(): PropertyGroup {
		let property: FormProperty = this;
		while (property.parent !== null ) {
			property = property.parent;
		}
		return <PropertyGroup>property;
	}

	private setVisible(visible: boolean) {
		this._visible = visible;
		this._visibilityChanges.next(visible);
		this.updateValueAndValidity();
		if (this.parent) {
			this.parent.updateValueAndValidity(false, true);
		}
	}

	// A fiel is visible if AT LEAST ONE of the properties it depends on is visible AND has a value in the list
	public _bindVisibility() {
		let visibleIf = this.schema.visibleIf;
		if (visibleIf !== undefined) {
			let propertiesBinding = [];
			for (let dependencyPath in visibleIf) {
				let property = this.searchProperty(dependencyPath);
				let valueCheck = property.valueChanges.map(
					value => visibleIf[dependencyPath].indexOf(value) != -1
				);
				let visibilityCheck = property._visibilityChanges;
				let and = Observable.combineLatest([valueCheck,visibilityCheck], (v1, v2) => v1 && v2);
				propertiesBinding.push(and);
			}

			Observable.combineLatest(propertiesBinding, (...values: boolean[]) => {
				return values.indexOf(true) != -1;
			}).distinctUntilChanged().subscribe((visible) => {
				this.setVisible(visible);
			});
		}
	}
}

