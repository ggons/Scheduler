import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey'
import { Grid } from '@material-ui/core'
import Project from 'components/project/Project';
import NewProjectLayout from 'components/project/NewProjectLayout';
import ViewProjects from 'components/project/ViewProjects';
import AppBar from 'components/project/AppBar';

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100%',
    background: blueGrey[50]
  },
  container: {
    height: 'calc(100vh - 64px)',
  }
});

const ProjectLayout = ({ history, match, classes }) => {
  return (  
    <div className={classes.root}>
      <AppBar history={history} />
      <Grid className={classes.container} container justify="center">
        <Switch>
          <Route path={`${match.url}/new`} component={NewProjectLayout} />
          <Route path={`${match.url}/projects`} component={ViewProjects} />
          <Route path={`${match.url}`} exact component={Project} />
        </Switch>
      </Grid>
    </div>
  );
}
 
export default withStyles(styles)(ProjectLayout); 