import deepCopy from '../../utils/copy';

import
{
  NEW_NOTIFICATION,
  REQUEST_NOTIFICATIONS,
  RECEIVE_NOTIFICATIONS,
  REQUEST_NOTIFICATIONS_FAILURE
} from '../../App/Actions';

 import
 {
   POST_AVATAR,
   POST_AVATAR_SUCESS,
   POST_AVATAR_FAILURE
 } from '../../Account/Profile/Actions';

import
{
   MARK_NOTIFICATION_READ,
   MARK_NOTIFICATION_READ_SUCCESS,
   MARK_NOTIFICATION_READ_FAILURE,
   MARK_ALL_NOTIFICATIONS_READ,
   DISMISS_NOTIFICATIONS
} from '../../Navbar/Actions';

import {
  UPDATE_USER,
  UPDATE_USER_SUCESS,
  UPDATE_USER_FAILURE
} from '../../Account/Profile/Actions';

import {
  CHANGE_PASSWORD,
  CHANGE_PASSWORD_SUCESS,
  CHANGE_PASSWORD_FAILURE,
  CLEAR_PASSWORD_ERRORS
}  from '../../Account/Security/Actions';

import {
  REGISTER_TEMP_USER
} from '../../Story/Actions';

const initialState = {
  loggedIn: false,
  isFetching: false,
  user : {
    id: null,
    name: "",
    username: "",
    role: "",
    email: "",
    avatar: "",
    link: "",
    oauth: [],
    loaded: false,
  },
  notifications: [],
  error: false,
  errorMessage: "",
  token: "",
  authType: "",
  password: "",
  registered: false,
  validated: false
}

export function session(state = initialState, action) {

  switch (action.type) {

   case REGISTER_TEMP_USER:
      return {...state, user: action.data };

      /* Logout */
      case POST_AVATAR:
  	    return { ...state, isFetching: true };
      case POST_AVATAR_SUCESS:
        let _modifiedUser = deepCopy(state.user);
        const _avatar = action.avatar.path;
        _modifiedUser.avatar = _avatar;
  	    return {
          ...state,
          isFetching:false,
          user: _modifiedUser
        };
      case POST_AVATAR_FAILURE:
        return { ...state, isFetching: false, error: true};

    /* Notifications. */

    case NEW_NOTIFICATION:
      const newNotification = JSON.parse(action.data);
      const items = state.notifications.concat(newNotification);
      return { ...state, notifications: items};
    case REQUEST_NOTIFICATIONS:
 	  return state;
    case RECEIVE_NOTIFICATIONS:
      const _items = state.notifications.concat(action.data.items);
      return { ...state, notifications: _items};
    case REQUEST_NOTIFICATIONS_FAILURE:
      return { ...state, isFetching: false, error: true};

    case MARK_ALL_NOTIFICATIONS_READ:
       const _notificationsAsRead = state.notifications.map(n => { n.read = true; return n });
       return { ...state, notifications: _notificationsAsRead };

    case MARK_NOTIFICATION_READ:
       return {...state, isFetching: true};
    case MARK_NOTIFICATION_READ_SUCCESS:
       const _notificationIndex = state.notifications.map(n => n.id).indexOf(action.id);
       const _clonedNotifications = deepCopy(state.notifications);
       _clonedNotifications[_notificationIndex].read = true;

       return {
         ...state,
         notifications: _clonedNotifications,
         isFetching: false
       };

    case MARK_NOTIFICATION_READ_FAILURE:
       return state;

    case DISMISS_NOTIFICATIONS:
       return { ...state, notifications: [] };

    case UPDATE_USER:
      return {...state, isFetching: true, validated: false };

    case UPDATE_USER_SUCESS:
      return {...state, user: action.data, isFetching: false, validated: true };

    case UPDATE_USER_FAILURE:
      return {...state, isFetching: false,  error: true, validated: false };

  case CHANGE_PASSWORD:
      return {...state, isFetching: true, validated: false };

  case CHANGE_PASSWORD_SUCESS:
      return {...state, isFetching: false, validated: true };

  case CHANGE_PASSWORD_FAILURE:
      return {...state, isFetching: false,  error: true, validated: false };

  case CLEAR_PASSWORD_ERRORS:
      return {...state, isFetching: false, error: false, validated: false };

    default:
      return state;

  }

}

export default session;
