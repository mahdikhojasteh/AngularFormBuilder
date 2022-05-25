import { createAction, props } from '@ngrx/store';
import { FieldModel } from 'src/app/models/field-model';
import { FormModel } from 'src/app/models/form-model';

export const clearForms = createAction('clear form');

export const deleteForm = createAction(
  'deleteFrom',
  props<{ form_id: string }>()
);
export const addForm = createAction('addForm', props<FormModel>());

export const addField = createAction(
  'addField',
  props<{ form_id: string; fieldModel: FieldModel }>()
);
