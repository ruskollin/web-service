import { createStore, combineReducers } from 'redux';

import { languageReducer } from './Language';

const rootReducer = combineReducers({
  language: languageReducer,
});

export const store = createStore(rootReducer);
