import { createReducer, on } from '@ngrx/store';
import { FormModel } from 'src/app/models/form-model';
import { addForm, clearForms, deleteForm } from './form.actions';

export const initialFormState: FormModel[] = [];

export const formReducer = createReducer(
  initialFormState,
  on(clearForms, (_) => []),

  on(deleteForm, (entries, data) => {
    const entriesClone: FormModel[] = JSON.parse(JSON.stringify(entries));
    const found = entriesClone.find((e) => e.id == data.form_id);
    if (found) {
      entriesClone.splice(entriesClone.indexOf(found), 1);
    }
    return entriesClone;
  }),

  on(addForm, (entries, formModel) => {
    const entriesClone: FormModel[] = JSON.parse(JSON.stringify(entries));
    entriesClone.push(formModel);
    return entriesClone;
  })
);
