import { ActionReducer, ActionReducerMap, INIT, UPDATE } from '@ngrx/store';
import { formReducer } from './form-state/form.reducers';

// list of reducers and their names
export const reducers: ActionReducerMap<any> = {
  formEntries: formReducer,
};

// meta reducer to handle persistig/retreiving of state into local storage
export const metaReducerLocalStorage = (
  reducer: ActionReducer<any>
): ActionReducer<any> => {
  return (state, action) => {
    if (action.type === INIT || action.type === UPDATE) {
      const storageValue = localStorage.getItem('state');
      if (storageValue) {
        try {
          return JSON.parse(storageValue);
        } catch {
          localStorage.removeItem('state');
        }
      }
    }
    const nextState = reducer(state, action);
    localStorage.setItem('state', JSON.stringify(nextState));
    return nextState;
  };
};
