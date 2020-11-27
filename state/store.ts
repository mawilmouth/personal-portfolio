import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { MakeStore, Context } from 'next-redux-wrapper';
import rootReducer from './reducers';
import { ApplicationState } from '../types/state/StoreTypes';

const store: MakeStore<ApplicationState> = (context: Context) => createStore(rootReducer, composeWithDevTools());

export default store;