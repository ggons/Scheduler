import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sprint from 'components/sprint/Sprint';
import * as actions from 'actions';

class SprintContainer extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getProject(id);
  }

  render() { 
    const { project } = this.props;

    return (
      <Sprint 
        {...this.props}
        tasks={project.tasks}
      />
    );
  }
}
 
export default connect(
  state => ({
    project: state.project.project
  }),
  actions
)(SprintContainer);