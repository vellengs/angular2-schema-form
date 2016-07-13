import { RouterConfig, provideRouter } from "@angular/router";
import { IntroductionComponent } from "./introduction.component.ts";
import { TutorialComponent } from "./tutorial.component.ts";
import { PlaygroundComponent } from "./playground.component.ts";

export const routes: RouterConfig = [
	{path: "introduction", component: IntroductionComponent},
	{path: "tutorial", component: TutorialComponent},
	{path: "playground", component: PlaygroundComponent},
	{path: "", redirectTo: "/introduction", pathMatch:"full" }
];

export const APP_ROUTER_PROVIDERS = [
	provideRouter(routes)
]
