import { Form, FieldRegistryService } from "angular2-schema-form";
import { Component } from "@angular/core";
import { HTTP_PROVIDERS } from "@angular/http";

import { SampleProviderService } from "./sampleprovider.service";

@Component({
	selector: "ng2sfdemo-playground",
	template: require("./playground.component.html"),
	providers: [HTTP_PROVIDERS, FieldRegistryService, SampleProviderService],
	directives: [Form]
})
export class PlaygroundComponent {
	private sample: string;
	private editor :any = {};
	private editorModel :any = {
		"editorSchema": "{\n \"properties\": {\n \"email\":{\"type\":\"string\", \"placeholder\":\"EeLLL\"},\n \"name\":{\"type\":\"string\",\"widget\":\"textline\",\"pattern\":\"^[A-Z]\",\"default\":\"red\"},\n \"age\":{\"type\":\"integer\",\"widget\":\"range\",\"minimum\":1,\"maximum\":99,\"default\":50}\n },\n \"buttons\": [{\"label\":\"Send\",\"id\":\"send\"},{\"label\":\"Reset\",\"id\":\"reset\"}],\n \"required\": [\"email\"],\n \"order\": [\"name\",\"email\",\"age\"]\n}",
		"editorModel": "{\"email\":\"fbessou@free.fr\"}",
		"editorActions": "{\n \"send\":function(form){\n alert(JSON.stringify(form.getModel()))\n },\n \"reset\": function(form){\n form.reset()\n }\n}"
	};
	private editorActions = {};
	private schema : any = {};
	private model  : any = {};
	private actions: any = {};
	private samples: any[] = [];

	constructor(private sampleProvider: SampleProviderService = null) {
		this.samples = sampleProvider.getSamples();
		this.schema = {};
		this.editorActions["update"] = (form) => {
			let model = form.getModel();
			this.schema = JSON.parse(model.editorSchema);
			this.model = JSON.parse(model.editorModel);
			this.actions = eval('('+model.editorActions+')');
			console.log(this.actions);
		}
		this.editor = require("./editorschema.json");
	}
}
