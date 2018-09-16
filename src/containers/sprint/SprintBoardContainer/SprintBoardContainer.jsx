import React, { Component } from 'react';
import { connect } from 'react-redux';
import SprintBoard from 'components/sprint/SprintBoard';

class SprintBoardContainer extends Component {
  state = {  }

  render() { 
    let { tasks } = this.props.project;

    return (  
      <SprintBoard tasks={tasks} />
    );
  }
}
 
export default connect(
  state => ({
    project: state.project.project
  })
)(SprintBoardContainer);