import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FieldTypeEnum } from 'src/app/models/enums/field-type-enum';
import { FieldModel } from 'src/app/models/field-model';

@Component({
  selector: 'app-edit-field-dialog',
  templateUrl: './edit-field-dialog.component.html',
  styleUrls: ['./edit-field-dialog.component.scss'],
})
export class EditFieldDialogComponent implements OnInit {
  @Input() formField: FieldModel | null = null;
  @Output() closeDialog = new EventEmitter<void>();
  @Output() closeDialogWithData = new EventEmitter<FieldModel>();

  editFields: FieldModel[] = [];
  fieldTypeEnum = FieldTypeEnum;

  constructor() {}

  ngOnInit(): void {
    if (this.formField) {
      // field_name
      this.editFields = [
        ...this.editFields,
        {
          field_type: FieldTypeEnum.textbox,
          label: 'field_name',
          tooltip: 'enter field_name',
          value: this.formField.field_name,
        } as FieldModel,
      ];
      // value
      this.editFields = [
        ...this.editFields,
        {
          field_type: FieldTypeEnum.textbox,
          label: 'value',
          tooltip: 'enter value',
          value: this.formField.value,
        } as FieldModel,
      ];
      // label
      this.editFields = [
        ...this.editFields,
        {
          field_type: FieldTypeEnum.textbox,
          label: 'label',
          tooltip: 'enter label',
          value: this.formField.label,
        } as FieldModel,
      ];
      // tooltip
      this.editFields = [
        ...this.editFields,
        {
          field_type: FieldTypeEnum.textbox,
          label: 'tooltip',
          tooltip: 'enter tooltip',
          value: this.formField.tooltip,
        } as FieldModel,
      ];
      // isRequired
      this.editFields = [
        ...this.editFields,
        {
          field_type: FieldTypeEnum.checkbox,
          label: 'isRequired',
          tooltip: 'enter isRequired',
          value: this.formField.isRequired,
        } as FieldModel,
      ];
      // save button
      this.editFields = [
        ...this.editFields,
        {
          field_type: FieldTypeEnum.button,
          label: 'save1',
          tooltip: 'save1',
          value: 'save',
        } as FieldModel,
      ];
      // cancel button
      this.editFields = [
        ...this.editFields,
        {
          field_type: FieldTypeEnum.button,
          label: 'cancel1',
          tooltip: 'cancel2',
          value: 'cancel',
        } as FieldModel,
      ];
    }
  }

  close() {
    this.closeDialog.emit();
  }

  saveOrCancel(value: string) {
    if (value == 'save') {
      this.editFields.map((e) => {
        switch (e.label) {
          case 'field_name':
            this.formField!.field_name = e.value;
            break;
          case 'value':
            this.formField!.value = e.value;
            break;
          case 'label':
            this.formField!.label = e.value;
            break;
          case 'tooltip':
            this.formField!.tooltip = e.value;
            break;
          case 'isRequired':
            this.formField!.isRequired = e.value;
            break;

          default:
            break;
        }
      });
      this.closeDialogWithData.emit(this.formField!);
    } else if (value == 'cancel') {
      this.close();
    }
  }
}
