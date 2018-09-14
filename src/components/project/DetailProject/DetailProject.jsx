import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { LinearProgress } from '@material-ui/core';
import DetailProjectTodos from 'components/project/DetailProjectTodos';

const styles = {
  root: {
    flexGrow: 1
  }
}

const DetailProject = ({ classes, isPending, project }) => {
  return (  
    <div className={classes.root}>
      { isPending ?
        <LinearProgress /> : (
          <React.Fragment>
            <DetailProjectTodos 
              todos={project.todos}
            />
            <p>{project.name}</p>
          </React.Fragment>
        )
      }
    </div>
  );
}
 
export default withStyles(styles)(DetailProject);