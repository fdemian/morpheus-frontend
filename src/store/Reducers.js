import { combineReducers } from 'redux';
import config from './Reducers/Config';
import session from './Reducers/Session';
import story from './Reducers/Story';
import category from './Reducers/Category';
import categories from './Reducers/Categories';
import user from './Reducers/User';

const rootReducer = combineReducers({
  config,
  session,
  story,
  categories,
  category,
  user
});

export default rootReducer;
