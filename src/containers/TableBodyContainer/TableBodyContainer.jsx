import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import TableBody from 'components/TableBody';
import ScheduleRegisterForm from 'components/ScheduleRegisterForm';
import * as actions from 'actions';

class TableBodyContainer extends Component {
  handleDateClick = day => {
    this.props.initScheduleForm({ title: '', startDate: '', endDate: '' });
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
    const { currentDate } = this.props;

    return (  
      <React.Fragment>
        <TableBody 
          dateArr={makeDateArr(currentDate)} 
          onDateClick={this.handleDateClick}
          onScheduleClick={this.handleScheduleClick}
        />
        <ScheduleRegisterForm />
      </React.Fragment>
    );
  }
}

function makeDateArr(currentDate) {
  let currentMoment = moment(currentDate);

  const thisMoment = moment(currentDate);
  const thisYear = thisMoment.get('year');
  const thisMonth = thisMoment.get('month') + 1;
  const thisDayOf1Date = moment(currentDate).date(1).get('day');
  const endDateOfThisMonth = thisMoment.daysInMonth();


  const prevMoment = moment(currentDate).subtract(1, 'months');
  const prevYear = prevMoment.get('year');
  const prevMonth = prevMoment.get('month') + 1;
  const endDateOfPrevMonth = prevMoment.daysInMonth();

  const nextMoment = moment(currentDate).add(1, 'months');
  const nextYear = nextMoment.get('year');
  const nextMonth = nextMoment.get('month') + 1;

  const totalWeek = Math.ceil((thisDayOf1Date + endDateOfPrevMonth) / 7);

  const dateArr = [];
  for (let i = 1; i <= endDateOfThisMonth; i++) {
    dateArr.push({ year: thisYear, month: thisMonth, date: i });
  }
  
  // 이번 달 1일이 월요일이 아닐 경우 (이전 달 마지막 주 정보 필요)
  if (thisDayOf1Date > 0) {
    for (let i = 0; i < thisDayOf1Date; i++) {
      dateArr.unshift({ year: prevYear, month: prevMonth, date: endDateOfPrevMonth - i, pm: true });
    }
  }

  // 이번 달 마지막이 토요일이 아닐 경우 (다음 달 첫째 주 정보 필요)
  if (dateArr.length % 7 !== 0) {
    const dateArrLen = dateArr.length;
    for (let i = 0; i < 7 - (dateArrLen % 7); i++) {
      dateArr.push({ year: nextYear, month: nextMonth, date: i + 1, nm: true })
    }
  }

  return dateArr;
}

export default connect(
  state => ({
    currentDate: state.date.currentDate
  }),
  actions
)(TableBodyContainer);