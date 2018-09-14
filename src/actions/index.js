import {
  SET_CURRENT_DATE,
  CHANGE_SCHEDULE_FORM,
  INIT_SCHEDULE_FORM,
  SET_SCHEDULE_MODAL,
  SET_SCHEDULES,
  ADD_PROJECT,
  GET_PROJECT
} from './types';

export function setCurrentDate(date) {
  return {
    type: SET_CURRENT_DATE,
    payload: date
  }
}

export function changeForm(target) {
  return {
    type: CHANGE_SCHEDULE_FORM,
    payload: target
  }
}

export function initScheduleForm(date) {
  return {
    type: INIT_SCHEDULE_FORM,
    payload: date
  }
}

export function setScheduleModal(open) {
  return {
    type: SET_SCHEDULE_MODAL,
    payload: open
  }
}

export function setSchedules(schedules) {
  return {
    type: SET_SCHEDULES,
    payload: schedules
  }
}

export function addProject(project) {
  return {
    type: ADD_PROJECT,
    payload: project
  }
}

export function getProject(id) {
  return {
    type: GET_PROJECT,
    payload: id
  }
}