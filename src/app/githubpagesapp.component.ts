import { Component } from "@angular/core";
import { ROUTER_DIRECTIVES } from "@angular/router";
import { PlaygroundComponent } from "./playground.component";

@Component({
	selector: "ghpages-app",
	template: require("./githubpagesapp.component.html"),
	styles: [ require("./githubpagesapp.component.css") ],
	directives: [ROUTER_DIRECTIVES]
})
export class GithubPagesAppComponent {
}
