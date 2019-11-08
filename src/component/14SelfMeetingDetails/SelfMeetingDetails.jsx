import React, { useEffect } from 'react';
import './SelfMeetingDetails.scss';
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
import Badge from 'component/06SelfDatingList/Badge';
import { inject, observer } from 'mobx-react';
import Grid from '@material-ui/core/Grid';

const SelfMeetingDetails = ({ selectedMeeting }) => {
  useEffect(() => {
    // setSelectedUser();
  }, []);
  return (
    <div className="Template">
      <Paper>
        <div className="topside">
          <div className="imoji">
            {`${selectedMeeting.sex}` === '남학우' ? <p>🤵</p> : <p>👧</p>}
          </div>
          <div className="id">
            ({selectedMeeting.sex}) {selectedMeeting.age} /{' '}
            {selectedMeeting.collage}
          </div>
          <div className="Out">
            <div className="out">
              <div className="Box">
                <div className="Row">
                  <div className="Q">나이</div>
                  <div className="A">
                    {selectedMeeting.TwoTwoFirstAge},{' '}
                    {selectedMeeting.TwoTwoSecondAge}
                    {selectedMeeting.FourFourFirstAge}
                    {selectedMeeting.FourFourSecondAge}
                  </div>
                </div>
                <div className="Row">
                  <div className="Q">학과</div>
                  <div className="A">
                    {selectedMeeting.TwoTwoFirstCollage},
                    {selectedMeeting.TwoTwoSecondCollage}
                    {selectedMeeting.FourFourFirstCollage}
                    {selectedMeeting.FourFourSecondCollage}
                  </div>
                </div>
                <div className="Row">
                  <div className="Q">해시태그</div>
                  <div className="A">
                    <Badge keyword={selectedMeeting.hashtag} color="primary" />
                  </div>
                </div>
                <div className="Row">
                  <div className="Q">자기소개</div>
                  <div className="A">
                    <Badge
                      keyword={selectedMeeting.selfintro}
                      color="primary"
                    />
                  </div>
                </div>
                <div className="Row">
                  <div className="Q">오픈채팅링크</div>
                  <div className="A">{selectedMeeting.openlink}</div>
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
              <Typography style={{ 'font-family': 'Noto Sans KR, sans-serif' }}>
                {selectedMeeting.appearance}
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
              <Typography style={{ 'font-family': 'Noto Sans KR, sans-serif' }}>
                {selectedMeeting.personality}
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
              <Typography style={{ 'font-family': 'Noto Sans KR, sans-serif' }}>
                {selectedMeeting.hobby}
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
              <Typography style={{ 'font-family': 'Noto Sans KR, sans-serif' }}>
                {selectedMeeting.idealtype}
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
                <Badge keyword={selectedMeeting.religion} color="rose" />
              </Typography>
            </ExpansionPanelSummary>
          </ExpansionPanel>
        </div>
      </Paper>
    </div>
  );
};
export default inject(({ userListStore }) => ({
  MeetingUserList: userListStore.MeetingUserList,
  selectedMeeting: userListStore.selectedMeeting,
  setSelectedMeeting: userListStore.setSelectedMeeting,
}))(observer(SelfMeetingDetails));
