import {
  SET_CURRENT_DATE,
  CHANGE_SCHEDULE_FORM,
  INIT_SCHEDULE_FORM,
  SET_SCHEDULE_MODAL,
  SET_SCHEDULES
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