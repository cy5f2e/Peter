import { createStore, applyMiddleware } from 'redux';
import RootReducer from './reducers/RootReducer';
// dev-tool
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// Global State
const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
