import React, { Component } from 'react';
import { connect } from 'react-redux';
import ViewProjects from 'components/project/ViewProjects';

class ViewProjectsContainer extends Component {
  state = {  }

  handleProjectClick = id => {console.log(id);
    this.props.history.push('/project/view/' + id);
  }

  render() { 
    const { projects } = this.props;

    return (  
      <ViewProjects
        projects={projects}
        onClick={this.handleProjectClick}
      />
    );
  }
}
 
export default connect(
  state => ({
    projects: state.project.projects
  })
)(ViewProjectsContainer);