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
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Badge from '../06SelfDatingList/Badge';
import { inject, observer } from 'mobx-react';
import Grid from '@material-ui/core/Grid';

const SelfDatingDetails = ({
  userList,
  setSelectedUser,
  selectedUser,
  history,
}) => {
  useEffect(() => {
    // setSelectedUser();
  }, []);

  //console.log(selectedUser);
  //console.log(selectedUser.age);
  return (
    <div className="Template">
      <Paper>
        <div className="topside">
          <div className="imoji">
            {`${selectedUser.gender}` == '남학우' ? <p>🤵</p> : <p>👧</p>}
          </div>
          <div className="id">
            ({selectedUser.gender}) {selectedUser.age} / {selectedUser.id}
          </div>
          <div className="Out">
            <div className="out">
              <div className="Box">
                <div className="Row">
                  <div className="Q">자기소개</div>
                  <div className="A">
                    <Badge keyword={selectedUser.tag} color="primary" />
                    <Badge keyword={selectedUser.religion} color="rose" />
                  </div>
                </div>
                <div className="Row">
                  <div className="Q">추가정보</div>
                  <div className="A">
                    {selectedUser.smoke} {selectedUser.religion}
                  </div>
                </div>
                <div className="Row">
                  <div className="Q">대화하기</div>
                  <div className="A">Openlink@kakao.com/123121123</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Expansion">
          <ExpansionPanel defaultExpanded="true">
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>😊외모 </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography style={{ 'font-family': 'Do Hyeon , sans-serif' }}>
                {selectedUser.appearance}
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel defaultExpanded="true">
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography> 🌵성격 </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography style={{ 'font-family': 'Do Hyeon , sans-serif' }}>
                {selectedUser.personality}
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel defaultExpanded="true">
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography> 🍀여가생활 및 취미 </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography style={{ 'font-family': 'Do Hyeon , sans-serif' }}>
                {selectedUser.hobby}
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel defaultExpanded="true">
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography> 💕연애관 및 바라는 이상형 </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography style={{ 'font-family': 'Do Hyeon , sans-serif' }}>
                {selectedUser.idealtype}
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel disabled>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography>
                <Badge keyword={selectedUser.religion} color="rose" />
              </Typography>
            </ExpansionPanelSummary>
          </ExpansionPanel>
        </div>
      </Paper>
    </div>
  );
};
export default inject(({ selfDatingUser }) => ({
  //userList: selfDatingUser.userList,
  selectedUser: selfDatingUser.selectedUser,
  //setSelectedUser: userlist.setSelectedUser,
}))(observer(SelfDatingDetails));
