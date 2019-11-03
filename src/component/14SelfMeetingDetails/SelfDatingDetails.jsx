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
import Badge from 'C:/Users/kocon/Desktop/Hongaeting_V1/hongaeting/src/component/06SelfDatingList/Badge.jsx';
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

  const useStyles = makeStyles();
  const classes = useStyles();
  console.log(selectedUser);
  console.log(selectedUser.age);
  return (
    <div className="Template">
      <Paper>
        <div className="topside">
          <div className="imoji">
            {`${selectedUser.sex}` == '남학우' ? <p>🤵</p> : <p>👧</p>}
          </div>
          <div className="id">
            ({selectedUser.sex}) {selectedUser.age} / {selectedUser.collage}
          </div>
          <div className="Out">
            <div className="out">
              <div className="Box">
                <div className="Row">
                  <div className="Q">이메일주소</div>
                  <div className="A">{selectedUser.kakaoid}</div>
                </div>
                <div className="Row">
                  <div className="Q">자기소개</div>
                  <div className="A">
                    <Badge keyword={selectedUser.hashtag} color="primary" />
                    <Badge keyword={selectedUser.religion} color="rose" />
                  </div>
                </div>
                <div className="Row">
                  <div className="Q">오픈채팅링크</div>
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
                그의 외모는 = {selectedUser.appearance}
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
                그의 성격은은 = {selectedUser.personality}
                {console.log(selectedUser.personality)}
                {console.log(selectedUser.religion)}}
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
                나의 취미는 = {selectedUser.hobby}
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
                이상형은 = {selectedUser.idealtype}
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
export default inject(({ userlist }) => ({
  userList: userlist.userList,
  selectedUser: userlist.selectedUser,
  setSelectedUser: userlist.setSelectedUser,
}))(observer(SelfDatingDetails));
