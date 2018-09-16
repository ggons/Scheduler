import {
  ADD_PROJECT,
  GET_PROJECT,
  ADD_TASK,
  CHANGE_TASK_VALUE
} from 'actions/types';
const testProject = {
  _id: 22222222,
  name: '커뮤니티 프로젝트',
  status: '', // 새로운, 진행중, 완료, 홀딩, 취소
  tasks: [
    {
      _id: '666',
      name: '기획',
      date: 'Oct 29',
      status: 0 // 준비, 진행중, 종료
    },
    {
      _id: '777',
      name: '설계',
      date: 'Oct 29',
      status: 1 // 준비, 진행중, 종료
    },
    {
      _id: '888',
      name: '코딩',
      date: 'Oct 29',
      status: 2 // 준비, 진행중, 종료
    },
    {
      _id: '999',
      name: '디자인',
      date: 'Oct 29',
      status: 4 // 준비, 진행중, 종료
    },
  ]
};
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
  project: {
    ...testProject
    // tasks: [

    // ]
  },
  isPending: true
};

/*
  project: {
    _id: '',
    name: '',
    status: '', // 준비, 진행중, 종료
    tasks: [
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
      // const project = state.projects.filter(project => project._id === action.payload.id);
      return Object.assign({}, state, { isPending: false })
    case ADD_TASK:
      return Object.assign({}, state, { project: { ...state.project, tasks: [...state.project.tasks, action.payload] }, isPending: false })
    case CHANGE_TASK_VALUE:
      return state;
    default:
      return state;
  }
}