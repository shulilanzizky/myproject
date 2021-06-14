import {createStore,combineReducers ,applyMiddleware}  from 'redux'
import userReducer from '../redux/reducer/userReducer'
import {addUser} from './middleware/crud'
const reducer = combineReducers({ userReducer})
const store = createStore(reducer,applyMiddleware(addUser));
  
window.store=store;
export default store
