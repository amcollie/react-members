import members from '../apis/members';
import history from '../history';

import {
    CREATE_MEMBER,
    FETCH_MEMBERS,
    FETCH_MEMBER,
    EDIT_MEMBER,
    DELETE_MEMBER
} from '../types';

export const createMember = formValues => async dispatch => {
    console.log(formValues);
    const response = await members.post('/members', formValues );

    dispatch({ type: CREATE_MEMBER, payload: response.data });

    history.push('/');
};

export const fetchMembers = () => async dispatch => {
    const response = await members.get('/members');

    dispatch({ type: FETCH_MEMBERS, payload: response.data });
};

export const fetchMember = id => async dispatch => {
    const response = await members.get(`/members/${id}`);

    dispatch({ type: FETCH_MEMBER, payload: response.data });
};

export const deleteMember = id => async dispatch => {
    await members.delete(`/members/${id}`);

    dispatch({ type: DELETE_MEMBER, payload: id });

    history.push('/');
};

export const editMember = (id, formValues) => async dispatch => {
    const response = await members.put(`/members/${id}`, formValues);

    dispatch({ type: EDIT_MEMBER, payload: response.data });

    history.push('/');
};
