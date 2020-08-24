import _ from 'lodash';
import {
    CREATE_MEMBER,
    FETCH_MEMBERS,
    FETCH_MEMBER,
    EDIT_MEMBER,
    DELETE_MEMBER
} from '../types';

export default (state = {}, action) => {
    switch(action.type) {
        case FETCH_MEMBER:
        case CREATE_MEMBER:
        case EDIT_MEMBER:
            return { ...state, [action.payload.id]: action.payload };
        case DELETE_MEMBER:
            return _.omit(action.payload);
        case FETCH_MEMBERS:
            return { ...state, ..._.mapKeys(action.payload, 'id')};
        default:
            return state;
    }
};