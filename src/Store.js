import { createStore } from 'redux';
import RootReducer from './reducers/RootReducer';
// dev-tool
import { composeWithDevTools } from 'redux-devtools-extension';

// Global State
const store = createStore(RootReducer, composeWithDevTools());

export default store;
