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
            {`(${selectedUser.number}) ${selectedUser.gender}  ${selectedUser.nickname}`}
          </div>
          <div className="Out">
            <div className="out">
              <div className="Box">
                <div className="Row">
                  <div className="Q">나이</div>
                  <div className="A">
                    {selectedUser.age1},{` `}
                    {selectedUser.age2}
                    {(()=>{
                      if(selectedUser.age3){
                        return `, ${selectedUser.age3}`
                      }
                    })()}
                    {(()=>{
                      if(selectedUser.age4){
                        return `, ${selectedUser.age4}`
                      }
                    })()}
                  </div>
                </div>
                <div className="Row">
                  <div className="Q">학과</div>
                  <div className="A" style={{ 'font-size': '14px' }}>
                    {selectedUser.collage1},{` `}
                    {selectedUser.collage2}
                    {(()=>{
                      if(selectedUser.collage3){
                        return `, ${selectedUser.collage3}`
                      }
                    })()}
                    {(()=>{
                      if(selectedUser.collage4){
                        return `, ${selectedUser.collage4}`
                      }
                    })()}
                  </div>
                </div>
                <div className="Row">
                  <div className="Q">해시태그</div>
                  <div className="A">
                    {(() => {
                      if (selectedUser.tag.toString().split('#')[1]) {
                        return (
                          <Badge
                            keyword={selectedUser.tag.toString().split('#')[1]}
                            color="a"
                          />
                        )
                      }
                    })()}
                    {(() => {
                      if (selectedUser.tag.toString().split('#')[2]) {
                        return (
                          <Badge
                            keyword={selectedUser.tag.toString().split('#')[2]}
                            color="b"
                          />
                        )
                      }
                    })()}
                    {(() => {
                      if (selectedUser.tag.toString().split('#')[3]) {
                        return (
                          <Badge
                            keyword={selectedUser.tag.toString().split('#')[3]}
                            color="c"
                          />
                        )
                      }
                    })()}
                    {(() => {
                      if (selectedUser.tag.toString().split('#')[4]) {
                        return (
                          <Badge
                            keyword={selectedUser.tag.toString().split('#')[4]}
                            color="d"
                          />
                        )
                      }
                    })()}
                    {(() => {
                      if (selectedUser.tag.toString().split('#')[5]) {
                        return (
                          <Badge
                            keyword={selectedUser.tag.toString().split('#')[5]}
                            color="e"
                          />
                        )
                      }
                    })()}
                    {(() => {
                      if (selectedUser.tag.toString().split('#')[6]) {
                        return (
                          <Badge
                            keyword={selectedUser.tag.toString().split('#')[6]}
                            color="a"
                          />
                        )
                      }
                    })()}
                    {(() => {
                      if (selectedUser.tag.toString().split('#')[7]) {
                        return (
                          <Badge
                            keyword={selectedUser.tag.toString().split('#')[7]}
                            color="b"
                          />
                        )
                      }
                    })()}
                    {(() => {
                      if (selectedUser.tag.toString().split('#')[8]) {
                        return (
                          <Badge
                            keyword={selectedUser.tag.toString().split('#')[8]}
                            color="c"
                          />
                        )
                      }
                    })()}
                    {(() => {
                      if (selectedUser.tag.toString().split('#')[9]) {
                        return (
                          <Badge
                            keyword={selectedUser.tag.toString().split('#')[9]}
                            color="d"
                          />
                        )
                      }
                    })()}
                    {(() => {
                      if (selectedUser.tag.toString().split('#')[10]) {
                        return (
                          <Badge
                            keyword={selectedUser.tag.toString().split('#')[10]}
                            color="e"
                          />
                        )
                      }
                    })()}
                  </div>
                </div>
                <div className="Row">
                  <div className="Q">자기소개</div>
                  <div className="A">
                    <Badge keyword={selectedUser.keysentence} color="e" />
                  </div>
                </div>
                <div className="Row">
                  <div className="Q">주량</div>
                  <div className="A" style={{ 'font-size': '14px' }}>
                    {selectedUser.drink}
                  </div>
                </div>
                <div className="Row">
                  <div className="Q">오픈채팅(클릭)</div>
                  {(() => {
                    if (selectedUser.chatlink.toString().split(':')[1]) {
                      return (
                        <div
                          className="A"
                          style={{ 'overflow-wrap': 'break-word' }}
                          onClick={() => {
                            window.open(`${selectedUser.chatlink}`);
                          }}
                        >
                          <a>{selectedUser.chatlink}</a>
                        </div>
                      );
                    }
                  })()}
                  {(() => {
                    if (selectedUser.chatlink.toString().split('@')[1]) {
                      return (
                        <div
                          className="A"
                          style={{ 'overflow-wrap': 'break-word' }}
                          onClick={() => {
                            window.open(`mailto:${selectedUser.chatlink}`);
                          }}
                        >
                          <a>{selectedUser.chatlink}</a>
                        </div>
                      );
                    }
                  })()}
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
                {selectedUser.appearance.split("\n").map((item, key) => {
                  return(
                    <p style = {{ 'font-family': 'Noto Sans KR, sans-serif' }}>
                      {item}
                    </p>
                  )
                })}
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
                {selectedUser.personality.split("\n").map((item, key) => {
                  return(
                    <p style = {{ 'font-family': 'Noto Sans KR, sans-serif' }}>
                      {item}
                    </p>
                  )
                })}
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
                {selectedUser.hobby.split("\n").map((item, key) => {
                  return(
                    <p style = {{ 'font-family': 'Noto Sans KR, sans-serif' }}>
                      {item}
                    </p>
                  )
                })}
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
                💕바라는 미팅상대
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography style={{ 'font-family': 'Noto Sans KR, sans-serif' }}>
                {selectedUser.idealtype.split("\n").map((item, key) => {
                  return(
                    <p style = {{ 'font-family': 'Noto Sans KR, sans-serif' }}>
                      {item}
                    </p>
                  )
                })}
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
