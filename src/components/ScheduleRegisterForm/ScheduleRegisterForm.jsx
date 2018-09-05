import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import MaskedInput from 'react-text-mask';
import moment from 'moment';
import { Typography, Input, InputLabel, FormControl, Button } from '@material-ui/core';
import Modal from 'components/common/Modal';
import * as actions from 'actions';

class ScheduleRegisterForm extends Component {
  handleClose = () => {
    this.props.initScheduleForm({ title: '', startDate: '', endDate: '' });
    this.props.setScheduleModal(false);
  }

  validation = () => {
    const { title, startDate, endDate } = this.props;
    let error = null;
    
    if (title.trim() === '')
      error = '타이틀을 입력하세요.';
    else if (!moment(startDate, 'YYYY-MM-DD').isValid()) 
      error = '시작 날짜 invalid';
    else if (!moment(endDate, 'YYYY-MM-DD').isValid()) 
      error = '종료 날짜 invalid';
    else if (moment(startDate).diff(moment(endDate)) > 0)
      error = '종료 날짜보다 시작 날짜보다 빠릅니다.';

    !!error && toast.error(error);

    return !error;
  }

  handleSubmit = e => {
    e.preventDefault();

    const isValid = this.validation();
    if (!isValid) {
      return false;
    }

    const { title, startDate, endDate, schedules } = this.props;
    let newSchedule = { title, startDate, endDate };

    let [sYear, sMonth, sDay] = startDate.split('-');
    sYear = parseInt(sYear, 10); sMonth = parseInt(sMonth, 10); sDay = parseInt(sDay, 10);
    let [eYear, eMonth, eDay] = endDate.split('-');
    eYear = parseInt(eYear, 10); eMonth = parseInt(eMonth, 10); eDay = parseInt(eDay, 10);

    for (let sy = sYear; sy <= eYear; sy++) {
      let sm = sy === sYear ? sMonth : 1;
      let em = sy === eYear ? eMonth : 12;

      for (; sm <= em; sm++) {
        let sd = (sy === sYear && sm === sMonth) ? sDay : 1;
        let ed = (sy === eYear && sm === eMonth) ? eDay : moment([sy, sm - 1]).daysInMonth();

        for (; sd <= ed; sd++) {  
          const dateString = `${sy}-${sm < 10 ? '0' + sm : sm}-${sd < 10 ? '0' + sd : sd}`;
          if (!schedules[dateString])
            schedules[dateString] = [];

          schedules[dateString].push({ ...newSchedule });
        }
      }
    }

    this.props.setSchedules(schedules);
    this.handleClose();
  }

  render() {
    const { 
      open, 
      title, 
      startDate, 
      endDate, 
      changeScheduleForm 
    } = this.props;

    return (  
      <Modal
        open={open}
        onClose={this.handleClose}
      >
        <Typography variant="title" id="modal-title">
          Schedule
        </Typography>
        <form onSubmit={this.handleSubmit}>
          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="title">Title</InputLabel>
            <Input 
              id="title" 
              name="title" 
              autoComplete="title" 
              autoFocus 
              value={title}
              onChange={changeScheduleForm}
            />
          </FormControl>
          <FormControl margin="normal" fullWidth>
            <Input
              name="startDate"
              type="text"
              id="startDate"
              value={startDate}
              onChange={changeScheduleForm}
              inputComponent={TextMaskCustom}
              placeholder="startDate"
            />
          </FormControl>
          <FormControl margin="normal" fullWidth>
            <Input
              name="endDate"
              type="text"
              id="endDate"
              value={endDate}
              onChange={changeScheduleForm}
              inputComponent={TextMaskCustom}
              placeholder="endDate"
            />
          </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="raised"
            color="primary"
          >
            Save
          </Button>
        </form>
      </Modal>
    );
  }
}

function TextMaskCustom(props) {
  const { inputRef, ...rest } = props;

  return (
    <MaskedInput
      {...rest}
      ref={inputRef}
      mask={[/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]}
      guide={true}
    />
  );
}

export default connect(
  state => ({
    title: state.schedule.form.title,
    startDate: state.schedule.form.startDate,
    endDate: state.schedule.form.endDate,
    open: state.schedule.open,
    schedules: state.schedule.schedules
  }),
  actions
)(ScheduleRegisterForm);