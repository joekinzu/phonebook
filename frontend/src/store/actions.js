import {
  ACTION_GET,
  ACTION_SHOW_MODAL_EDIT,
  ACTION_SHOW_MODAL_NEW,
  ACTION_CHANGE_NAME,
  ACTION_CHANGE_PHONE,
} from './actionTypes';

// initialize axios variables
const axios = require('axios');

// --------CRUD--------
// show records
export const getRecs = () => dispatch => {
  axios
    .get('http://localhost/phonebook')
    .then(res => {
      return res.data;
    })
    .then(d => dispatch({ type: ACTION_GET, payload: d }));
};
// add record
export const addRec = records => dispatch => {
  console.log(records)
  axios
    .post('http://localhost/phonebook/add', {
      name: records.name,
      phone: records.phone
    })
    .then(res => dispatch(getRecs()))
};
// update record
export const updateRec = records => dispatch => {
  console.log(records.id)
  let U = 'http://localhost/phonebook/update';
  axios
    .post(U, {
      id: records.id,
      name: records.name,
      phone: records.phone
    })
    .then(res => dispatch(getRecs()))
};
// delete record
export const delRec = id => dispatch => {
  let U = 'http://localhost/phonebook/delete/id=' + id;
  axios
    .get(U)
    .then(res => dispatch(getRecs()))
};

// --------MODAL ACTIONS--------
// edit modal view
export const showModalEdit = (event, id, records) => dispatch => {
  dispatch({
    type: ACTION_SHOW_MODAL_EDIT,
    payload: { event: event, id: id, records: records }
  });
};
// add modal view
export const showModalNew = data => dispatch => {
  return dispatch({
    type: ACTION_SHOW_MODAL_NEW,
    payload: data
  });
};

// --------FORM ACTIONS--------
// change name column
export const changename = data => {
  return {
    type: ACTION_CHANGE_NAME,
    payload: data
  };
};
// change phone column
export const changephone = data => {
  return {
    type: ACTION_CHANGE_PHONE,
    payload: data
  };
};
