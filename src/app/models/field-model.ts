import { FieldTypeEnum } from './enums/field-type-enum';
import { SelectOptionModel } from './select-option-model';
import { Guid } from 'guid-typescript';

export class FieldModel {
  id: string = Guid.create().toString();
  field_name: string = 'field_name';
  field_type: FieldTypeEnum = FieldTypeEnum.textbox;
  value: any = '';
  label: string = 'field_label';
  tooltip?: string;
  isRequired: boolean = true;
  options?: SelectOptionModel[];

  constructor(field_type: FieldTypeEnum) {
    switch (field_type) {
      case FieldTypeEnum.textbox:
        this.field_type = field_type;
        this.field_name = 'texbox_field';
        this.value = '';
        this.label = 'textbox_label';
        this.tooltip = 'please enter text';
        this.isRequired = true;
        break;
      case FieldTypeEnum.textarea:
        this.field_type = field_type;
        this.field_name = 'textarea_field';
        this.value = '';
        this.label = 'textarea_label';
        this.tooltip = 'please enter textarea';
        this.isRequired = true;
        break;
      case FieldTypeEnum.button:
        this.field_type = field_type;
        this.field_name = 'button_field';
        this.value = 'button name';
        this.label = 'button_label';
        this.tooltip = 'press button';
        break;
      case FieldTypeEnum.select:
        this.field_type = field_type;
        this.field_name = 'select_field';
        this.value = '';
        this.label = 'select_label';
        this.tooltip = 'please select from options list';
        this.isRequired = true;
        this.options = [
          {
            key: '1',
            value: 'test value 1',
          } as SelectOptionModel,
          {
            key: '2',
            value: 'test value 2',
          } as SelectOptionModel,
        ];
        break;
      case FieldTypeEnum.radio:
        this.field_type = field_type;
        this.field_name = 'radio_field';
        this.value = '';
        this.label = 'radio_label';
        this.tooltip = 'please radio one option';
        this.isRequired = true;
        this.options = [
          {
            key: '1',
            value: 'test value 1',
          } as SelectOptionModel,
          {
            key: '2',
            value: 'test value 2',
          } as SelectOptionModel,
        ];
        break;
      case FieldTypeEnum.datepicker:
        this.field_type = field_type;
        this.field_name = 'datepicker_field';
        this.value = '';
        this.label = 'datepicker_label';
        this.tooltip = 'please enter date';
        this.isRequired = true;
        break;
      case FieldTypeEnum.checkbox:
        this.field_type = field_type;
        this.field_name = 'checkbox_field';
        this.value = '';
        this.label = 'checkbox_label';
        this.tooltip = 'please check boxes';
        this.isRequired = true;
        this.options = [
          {
            key: '1',
            value: 'test value 1',
          } as SelectOptionModel,
          {
            key: '2',
            value: 'test value 2',
          } as SelectOptionModel,
        ];
        break;

      default:
        break;
    }
  }
}
