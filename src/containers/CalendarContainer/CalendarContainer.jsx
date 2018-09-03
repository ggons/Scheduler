import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

class CalendarContainer extends Component {
  state = {  }

  render() { 
    const { currentDate } = this.props;
    let currentMoment = moment(currentDate);

    const thisMonth = currentMoment.get('month') + 1;
    const endDayOfThisMonth = currentMoment.daysInMonth();

    const prevMoment = currentMoment.subtract(1, 'months');
    const prevMonth = prevMoment.get('month') + 1;
    const endDayOfPrevMonth = prevMoment.daysInMonth();

    currentMoment = moment(currentDate);

    const nextMoment = currentMoment.add(1, 'months');
    const nextMonth = nextMoment.get('month') + 1;

    currentMoment = moment(currentDate);

    const totalWeek = Math.ceil((currentMoment.date(1).get('day') + endDayOfPrevMonth) / 7);

    return (  
      <div>
        CalendarContainer
      </div>
    );
  }
}

export default connect(
  state => ({
    currentDate: state.date.currentDate
  })
)(CalendarContainer);