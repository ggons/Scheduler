import React from 'react';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import DeleteConfirmDialog from 'components/Register/DeleteConfirmDialog';

const styles = {
  delete: {
    marginTop: 10
  }
}

const RegisterActions = ({ classes, vo, open, onDeleteClick, onDeleteConfirmSelect }) => {
  const deleteBtn = vo && (  
    <Button
      className={classes.delete}
      type="button"
      fullWidth
      variant="raised"
      color="secondary"
      style={{ marginTop: 10 }}
      onClick={onDeleteClick}
    >
      Delete
    </Button> 
  )

  return (  
    <React.Fragment>
      <Button
        type="submit"
        fullWidth
        variant="raised"
        color="primary"
      >
        Save
      </Button>
      { deleteBtn }
      <DeleteConfirmDialog 
        open={open}
        onDeleteConfirmSelect={onDeleteConfirmSelect}
      />
    </React.Fragment>
  );
}
 
export default withStyles(styles)(RegisterActions);