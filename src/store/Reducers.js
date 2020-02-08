import { combineReducers } from 'redux';
import config from './Reducers/Config';
import session from './Reducers/Session';
import stories from './Reducers/Stories';
import story from './Reducers/Story';
import category from './Reducers/Category';
import composer from './Reducers/Composer';
import categories from './Reducers/Categories';
import user from './Reducers/User';
import drafts from './Reducers/Drafts';

const rootReducer = combineReducers({
  config,
  session,
  stories,
  drafts,
  story,
  composer,
  categories,
  category,
  user
});

export default rootReducer;
