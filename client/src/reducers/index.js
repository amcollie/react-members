import { combineReducers } from 'redux';
import {reducer as formReducer } from 'redux-form';

import memberReducer from './memberReducer';

export default combineReducers({
    form: formReducer,
    members: memberReducer
});