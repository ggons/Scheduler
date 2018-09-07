import React, { Component } from 'react';
import { connect } from 'react-redux';
import TableBody from 'components/TableBody';
import ScheduleRegisterForm from 'components/ScheduleRegisterForm';
import * as actions from 'actions';
import { makeWeeksData } from 'utils/date';

class TableBodyContainer extends Component {
  state = {}

  handleDateClick = day => {
    this.props.initScheduleForm({ title: '', startDate: day.str, endDate: day.str });
    this.handleOpen();
  }

  handleScheduleClick = (e) => {
    e.stopPropagation();
    this.handleOpen();
  }

  handleOpen = () => {
    this.props.setScheduleModal(true);
  }

  render() { 
    const { currentDate, schedules } = this.props;
    const { weeksDate, weeksSchedule } = makeWeeksData(currentDate, schedules);

    return (  
      <React.Fragment>
        <TableBody 
          weeksDate={weeksDate} 
          weeksSchedule={weeksSchedule} 
          onDateClick={this.handleDateClick}
          onScheduleClick={this.handleScheduleClick}
        />
        <ScheduleRegisterForm />
      </React.Fragment>
    );
  }
}

export default connect(
  state => ({
    currentDate: state.date.currentDate,
    schedules: state.schedule.schedules
  }),
  actions
)(TableBodyContainer);