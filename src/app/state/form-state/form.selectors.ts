import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FormModel } from 'src/app/models/form-model';

// export const selectorName = createSelector(
//   createFeatureSelector('nameOfState'),
//   (state: model[]) => {
//     let total = state.reduce((sum, e) => {
//       return sum + e.count
//     }, 0)
//   }
// )

export const selectForms = createSelector(
  createFeatureSelector('formEntries'),
  (state: FormModel[]) => {
    return state;
  }
);

export const selectForm = (form_id: string) =>
  createSelector(createFeatureSelector('formEntries'), (state: FormModel[]) => {
    let found = state.find((e) => e.id == form_id);
    return found;
  });
