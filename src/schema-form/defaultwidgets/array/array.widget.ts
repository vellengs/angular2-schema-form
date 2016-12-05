import { Component } from "@angular/core";

import { ArrayLayoutWidget } from "../../widget";

@Component({
  selector: "array-widget",
  templateUrl: "./array.widget.html"
})
export class ArrayWidget extends ArrayLayoutWidget {

  addItem() {
    this.formProperty.addItem();
  }

  removeItem(index: number) {
    this.formProperty.removeItem(index);
  }
}
