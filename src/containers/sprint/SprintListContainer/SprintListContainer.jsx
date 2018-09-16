import React, { Component } from 'react';
import { connect } from 'react-redux';
import SprintList from 'components/sprint/SprintList';
import * as actions from 'actions'

class SprintListContainer extends Component {
  state = {  
    isOpenNewTaskInput: false,
    newtask: '',
    activeIndex: -1
  }

  handleOpenNewTaskInput = (isOpen) => {
    this.setState({ isOpenNewTaskInput: isOpen });
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSelect = index => {
    this.setState({ activeIndex: index })
  }

  handleNewTaskSubmit = e => {
    e.preventDefault();

    const { newtask } = this.state;
    if (newtask.trim() === '') return true;

    this.props.addTask(newtask);
    this.setState({ newtask: '', isOpenNewTaskInput: false });
  }

  handleStatusChange = e => {
    
  }
  
  render() { 
    const { tasks } = this.props.project;
    const { isOpenNewTaskInput, activeIndex } = this.state;

    return (  
      <SprintList 
        tasks={tasks} 
        isOpenNewTaskInput={isOpenNewTaskInput}
        activeIndex={activeIndex}
        onOpenNewTaskInput={this.handleOpenNewTaskInput}
        onNewTaskSubmit={this.handleNewTaskSubmit}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
        onStatusChange={this.handleStatusChange}
      />
    );
  }
}

export default connect(
  state => ({
    project: state.project.project
  }),
  actions
)(SprintListContainer);