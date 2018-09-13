import {
  ADD_PROJECT
} from 'actions/types';

const initialState = {
  projects: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_PROJECT:
      return Object.assign({}, state, { projects: [...state.projects, action.payload] });
    default:
      return state;
  }
}