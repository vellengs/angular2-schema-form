import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class SampleProviderService {
	private samples = require("../../samples/samples.json");

	constructor(private http: Http) {}

	getSamples(): any {
		return this.samples;
	}
}
