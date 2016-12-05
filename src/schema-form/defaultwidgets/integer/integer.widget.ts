import {
  Component,
} from "@angular/core";

import { ControlWidget } from "../../widget";

@Component({
  selector: "integer-widget",
  templateUrl: "./integer.widget.html"
})
export class IntegerWidget extends ControlWidget {}
