import React, { useState, useEffect } from 'react';
import './SelfDatingDetails.scss';
import { useHistory } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Paper from '@material-ui/core/Paper';
import CommentIcon from '@material-ui/icons/Comment';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Table from '@material-ui/core/Table';
import { inject, observer } from 'mobx-react';

const SelfDatingDetails = ({
  userList,
  setSelectedUser,
  selectedUser,
  history,
}) => {
  useEffect(() => {
    // setSelectedUser();
  }, []);

  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    Expansion: {
      width: '100%',
    },
    Expansionhead: {
      fontSize: theme.typography.pxToRem(18),
      fontWeight: theme.typography.fontWeightRegular,
    },
    root1: {
      width: '100%',
      maxWidth: 3000,
      backgroundColor: theme.palette.background.paper,
    },
    table: {
      minWidth: 100,
      maxWidth: 500,
    },
  }));
  const classes = useStyles();
  const handleGoBack = () => {
    history.goBack();
  };

  const handleGoHome = () => {
    history.push('/');
  };
  const historyy = useHistory();

  console.log(selectedUser);
  console.log(selectedUser.age);
  return (
    <div>
      <div>
        <button onClick={() => historyy.goBack()}>뒤로</button>
        <button onClick={handleGoHome}>홈으로</button>
      </div>
      <h1 className="imoji">😊</h1>
      <h1>
        ({selectedUser.id}) {selectedUser.age} / {selectedUser.collage}
      </h1>
      <Paper>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell variant="head">
                <CommentIcon /> 자기소개
              </TableCell>
              <TableCell> {selectedUser.hobby}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell variant="head">
                <CommentIcon />
                링크
              </TableCell>
              <TableCell>
                <a href={selectedUser.kakaoid}>{selectedUser.kakaoid}</a>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
      <div className={classes.Expansion}>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.Expansiobhead}>😊외모 </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>그의 외모는 = {selectedUser.personality}</Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>😊성격 </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>그의 성격은 = {selectedUser.idealtype}</Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel disabled>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography className={classes.heading}>
              Disabled Expansion Panel
            </Typography>
          </ExpansionPanelSummary>
        </ExpansionPanel>
      </div>
    </div>
  );
};
export default inject(({ userlist }) => ({
  userList: userlist.userList,
  selectedUser: userlist.selectedUser,
  setSelectedUser: userlist.setSelectedUser,
}))(observer(SelfDatingDetails));
