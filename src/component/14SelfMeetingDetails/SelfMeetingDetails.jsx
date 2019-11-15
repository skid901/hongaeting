import React, { useEffect } from 'react';
import './SelfMeetingDetails.scss';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Paper from '@material-ui/core/Paper';
import Badge from 'component/06SelfDatingList/Badge';
import { inject, observer } from 'mobx-react';

const SelfMeetingDetails = ({ selectedUser }) => {
  useEffect(() => {
    // setSelectedUser();
  }, []);
  return (
    <div className="Template">
      <Paper>
        <div className="topside">
          <div className="imoji">
            {`${selectedUser.gender}` == '남학우' ? <p>🤵</p> : <p>👧</p>}
          </div>
          <div className="id">
            {`(${selectedUser.number})${selectedUser.gender}/${selectedUser.nickname}`}
          </div>
          <div className="Out">
            <div className="out">
              <div className="Box">
                <div className="Row">
                  <div className="Q">나이</div>
                  <div className="A">
                    {selectedUser.age1},{selectedUser.age2},{selectedUser.age3},
                    {selectedUser.age4},
                  </div>
                </div>
                <div className="Row">
                  <div className="Q">학과</div>
                  <div className="A" style={{ 'font-size': '14px' }}>
                    {selectedUser.collage1},{selectedUser.collage2},
                    {selectedUser.collage3},{selectedUser.collage4},
                  </div>
                </div>
                <div className="Row">
                  <div className="Q">해시태그</div>
                  <div className="A">
                    <Badge
                      keyword={selectedUser.tag.toString().split('#')[1]}
                      color="a"
                    />
                    <Badge
                      keyword={selectedUser.tag.toString().split('#')[2]}
                      color="b"
                    />
                    <Badge
                      keyword={selectedUser.tag.toString().split('#')[3]}
                      color="c"
                    />
                  </div>
                </div>
                <div className="Row">
                  <div className="Q">자기소개</div>
                  <div className="A">
                    <Badge keyword={selectedUser.keysentence} color="e" />
                  </div>
                </div>
                <div className="Row">
                  <div className="Q">오픈채팅링크</div>
                  <div
                    className="A"
                    style={{ 'overflow-wrap': 'break-word' }}
                    onClick={() => {
                      window.open(`${selectedUser.chatlink}`);
                    }}
                  >
                    {selectedUser.chatlink}
                  </div>
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
              <Typography
                style={{
                  'font-family': 'Noto Sans KR, sans-serif',
                  'font-weight': 'bold',
                  'font-size': '18px',
                }}
              >
                😊외모
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography style={{ 'font-family': 'Noto Sans KR, sans-serif' }}>
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
              <Typography
                style={{
                  'font-family': 'Noto Sans KR, sans-serif',
                  'font-weight': 'bold',
                  'font-size': '18px',
                }}
              >
                🌵성격
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography style={{ 'font-family': 'Noto Sans KR, sans-serif' }}>
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
              <Typography
                style={{
                  'font-family': 'Noto Sans KR, sans-serif',
                  'font-weight': 'bold',
                  'font-size': '18px',
                }}
              >
                🍀여가생활 및 취미
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography style={{ 'font-family': 'Noto Sans KR, sans-serif' }}>
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
              <Typography
                style={{
                  'font-family': 'Noto Sans KR, sans-serif',
                  'font-weight': 'bold',
                  'font-size': '18px',
                }}
              >
                💕연애관 및 바라는 이상형
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography style={{ 'font-Family': 'Noto Sans KR, sans-serif' }}>
                {selectedUser.idealtype}
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel disabled>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            ></ExpansionPanelSummary>
          </ExpansionPanel>
        </div>
      </Paper>
    </div>
  );
};
export default inject(({ selfMeetingUser }) => ({
  selectedUser: selfMeetingUser.selectedUser,
}))(observer(SelfMeetingDetails));
