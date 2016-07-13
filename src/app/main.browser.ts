import { bootstrap } from "@angular/platform-browser-dynamic";
import { HTTP_PROVIDERS } from "@angular/http";
import {LocationStrategy, HashLocationStrategy } from '@angular/common';
import { disableDeprecatedForms, provideForms} from "@angular/forms";

import { APP_ROUTER_PROVIDERS } from "./app.routes.ts";
import { GithubPagesAppComponent } from "./githubpagesapp.component";

bootstrap(GithubPagesAppComponent, [disableDeprecatedForms(), provideForms(), APP_ROUTER_PROVIDERS, HTTP_PROVIDERS, {provide: LocationStrategy, useClass: HashLocationStrategy} ]);
