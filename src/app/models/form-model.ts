import { Guid } from 'guid-typescript';
import { FieldModel } from './field-model';

export class FormModel {
  id: string;
  form_name: string;
  form_fields: FieldModel[] = [];

  constructor(form_name: string = 'form_name') {
    this.id = Guid.create().toString();
    this.form_name = form_name;
  }
}
