import { combineReducers } from 'redux';
import ProductReducer from './ProductReducer';

const RootReducer = combineReducers({
  product: ProductReducer,
});

export default RootReducer;
