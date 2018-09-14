import {
  ADD_PROJECT,
  GET_PROJECT
} from 'actions/types';

const initialState = {
  projects: [
    {
      _id: 11111111,
      name: '100 프로젝트'
    },
    {
      _id: 22222222,
      name: '커뮤니티 프로젝트'
    },
    {
      _id: 33333333,
      name: 'Scheduler 프로젝트'
    },
  ],
  project: {},
  isPending: true
};

/*
  project: {
    _id: '',
    name: '',
    status: '', // 준비, 진행중, 종료
    todos: [
      {
        _id: '',
        name: '',
        status: '' // 준비, 진행중, 종료
      },
      {
        _id: '',
        name: '',
        status: '' // 준비, 진행중, 종료
      },
    ]
  }
*/

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_PROJECT:
      return Object.assign({}, state, { projects: [...state.projects, action.payload] });
    case GET_PROJECT:
      const project = state.projects.filter(project => project._id === action.payload.id);
      return Object.assign({}, state, { project: { ...project }, isPending: false })
    default:
      return state;
  }
}