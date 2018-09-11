import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Project from 'components/project/Project';
import NewProject from 'components/project/NewProject';
import brown from '@material-ui/core/colors/brown'

const styles = theme => ({
  root: {
    flexGrow: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    background: brown[50]
  }
});

const ProjectLayout = ({ match, classes }) => {
  return (  
    <div className={classes.root}>
      <Switch>
        <Route path={`${match.url}/new`} component={NewProject} />
        <Route path={`${match.url}`} exact component={Project} />
      </Switch>
    </div>
  );
}
 
export default withStyles(styles)(ProjectLayout);