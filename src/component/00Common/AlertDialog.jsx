import React, { useContext } from 'react';
import { observer, MobXProviderContext, useObserver } from 'mobx-react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const AlertDialog = observer(() => {
  //
  const { alert } = useContext(MobXProviderContext);

  const handleClose = () => {
    alert.setIsOpen(false);
  };

  return useObserver(() => (
    <div>
      <Dialog
        open={alert.isOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{`${alert.title}`}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {`${alert.message}`}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            닫기
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  ));
});

export default AlertDialog;
