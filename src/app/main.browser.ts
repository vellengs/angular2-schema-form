import { GithubPagesAppComponent } from "./githubpagesapp.component";
import { bootstrap } from "@angular/platform-browser-dynamic";

import { disableDeprecatedForms, provideForms} from "@angular/forms";

bootstrap(GithubPagesAppComponent, [disableDeprecatedForms(), provideForms()]);
