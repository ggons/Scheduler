import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { 
  red, 
  pink,
  deepPurple,
  indigo,
  blue,
  cyan,
  teal,
  green,
  lime,
  amber,
  deepOrange,
  brown,
} from '@material-ui/core/colors';

const colors = [ 
  red[500], 
  pink[500],
  deepPurple[500],
  indigo[500],
  blue[500],
  cyan[500],
  teal[500],
  green[500],
  lime[500],
  amber[500],
  deepOrange[500],
  brown[500],
];

const styles = {
  colorDiv: {
    height: 20
  }
}

const ScheduleColors = ({ classes }) => {
  return (  
    <Grid container>
      { colors.map(color => (
        <Grid 
          item
          xs={1}
          className={classes.colorDiv}
          style={{ backgroundColor: color }}
          key={color}
        ></Grid> 
      )) }
    </Grid>
  );
}
 
export default withStyles(styles)(ScheduleColors);