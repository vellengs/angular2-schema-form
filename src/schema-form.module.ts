import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

import { FormElementComponent } from './schema-form/formelement.component';
import { FormComponent } from './schema-form/form.component';
import { WidgetChooserComponent } from './schema-form/widgetchooser.component';
import { WidgetRegistry } from './schema-form/widgetregistry';
import {
  ArrayWidget,
  ObjectWidget,
  CheckboxWidget,
  FileWidget,
  IntegerWidget,
  TextAreaWidget,
  RadioWidget,
  RangeWidget,
  SelectWidget,
  StringWidget
} from './schema-form/defaultwidgets';

@NgModule({
  imports : [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [
    FormElementComponent,
    FormComponent,
    WidgetChooserComponent,
    ArrayWidget,
    ObjectWidget,
    CheckboxWidget,
    FileWidget,
    IntegerWidget,
    TextAreaWidget,
    RadioWidget,
    RangeWidget,
    SelectWidget,
    StringWidget,
  ],
  entryComponents: [
    FormElementComponent,
    FormComponent,
    WidgetChooserComponent,
    ArrayWidget,
    ObjectWidget,
    CheckboxWidget,
    FileWidget,
    IntegerWidget,
    TextAreaWidget,
    RadioWidget,
    RangeWidget,
    SelectWidget,
    StringWidget,
  ],
  exports: [
    FormComponent,
    FormElementComponent,
    ArrayWidget,
    ObjectWidget,
    CheckboxWidget,
    FileWidget,
    IntegerWidget,
    TextAreaWidget,
    RadioWidget,
    RangeWidget,
    SelectWidget,
    StringWidget
  ]
})
export class SchemaFormModule {}
