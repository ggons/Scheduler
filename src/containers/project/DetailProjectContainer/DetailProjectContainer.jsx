import React, { Component } from 'react';
import { connect } from 'react-redux';
import DetailProject from 'components/project/DetailProject';
import * as actions from 'actions';

class DetailProjectContainer extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getProject(id);
  }

  render() { 
    const { isPending, project } = this.props;

    return (
      <DetailProject 
        isPending={isPending}
        project={project}
      />
    );
  }
}
 
export default connect(
  state => ({
    project: state.project.project,
    isPending: state.project.isPending
  }),
  actions
)(DetailProjectContainer);