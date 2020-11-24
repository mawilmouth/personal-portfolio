import { createStore } from 'redux';
import { MakeStore, Context } from 'next-redux-wrapper';
import rootReducer from './reducers';
import { ApplicationState } from '../types/state/StoreTypes';

const store: MakeStore<ApplicationState> = (context: Context) => createStore(rootReducer);

export default store;