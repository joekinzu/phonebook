import {
  ACTION_GET,
  ACTION_SHOW_MODAL_EDIT,
  ACTION_SHOW_MODAL_NEW,
  ACTION_CHANGE_PHONE,
  ACTION_CHANGE_NAME,
} from './actionTypes';


// main state
const initialState = {
  records: [],
  showModalEditState: false,
  showModalNewState: false,
  id:   '',
  name:   '',
  phone:   '',
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_GET:
      return {
        ...state,
        records: action.payload
      };

    case ACTION_SHOW_MODAL_EDIT:
      if (action.payload.event === true) {
        for (var i = 0; i < state.records.length; i++) {
          let key = state.records.indexOf(state.records[i]);
          if (state.records[i].id === action.payload.id) {
            return {
              ...state,
              showModalEditState: action.payload.event,
              id:   state.records[key].id,
              name: state.records[key].name,
              phone:  state.records[key].phone,
            };
          }
        }   
      }else{
          return {
            ...state,
            showModalEditState: action.payload.event,
            name: '',
            phone: '',
        };
      } break;

    case ACTION_SHOW_MODAL_NEW:
      return {
        ...state,
        showModalNewState: action.payload
      };

    // CHANGE FORM INPUTS
    case ACTION_CHANGE_NAME:
      return {
        ...state,
        name: action.payload
      };

    case ACTION_CHANGE_PHONE:
      return {
        ...state,
        phone: action.payload
      };  
      
    default:
      return state;
  }
};
