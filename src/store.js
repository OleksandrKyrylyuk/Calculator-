import { createStore } from 'redux';
import RootReducer from './reducers/rootReducer';

const store = createStore(RootReducer);

export default store;

