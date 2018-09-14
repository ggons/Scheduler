import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 4
  },
  statusBox: {
    height: 400,
    border: '1px solid black',
    margin: theme.spacing.unit * 2
  },
  title: {
    position: 'relative',
    '&:before': {
      content: '""',
      position: 'absolute',
      width: '100%',
      bottom: 0,
      left: 0,
      borderBottom: '1px solid black'
    }
  },
  
});

const DetailProjectTodos = ({ classes, todos }) => {
  return (  
    <div className={classes.root}>
      <Grid container spacing={32}>
        <Grid item xs className={classes.statusBox}>
          <Typography variant="headline" className={classes.title}>list</Typography>
        </Grid>
        <Grid item xs className={classes.statusBox}>
          <Typography variant="headline">ready</Typography>
        </Grid>
        <Grid item xs className={classes.statusBox}>
          <Typography variant="headline">-ing</Typography>
        </Grid>
        <Grid item xs className={classes.statusBox}>
          <Typography variant="headline">done</Typography>
        
        </Grid>
      </Grid>
    </div>
  );
}
 
export default withStyles(styles)(DetailProjectTodos);