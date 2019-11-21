import React from 'react';
import './SelfDatingDetails.scss';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Paper from '@material-ui/core/Paper';
import Badge from 'component/06SelfDatingList/Badge';
import { inject, observer } from 'mobx-react';
import ListIcon from '@material-ui/icons/List';
import ChatIcon from '@material-ui/icons/Chat';
import SmokeFreeIcon from '@material-ui/icons/SmokeFree';
import LooksIcon from '@material-ui/icons/Looks';

const SelfDatingDetails = ({ selectedUser }) => {
  return (
    <div className="Template">
      <Paper>
        <div className="topside">
          <div className="imoji">
            {`${selectedUser.gender}` == '남학우' ? <p>🤵</p> : <p>👧</p>}
          </div>
          <div className="id">
            ({selectedUser.id}) {selectedUser.age} {` `} {selectedUser.gender}
          </div>
          <div className="Out">
            <div className="out">
              <div className="Box">
                <div className="Row">
                  <div className="Q">
                    <ListIcon style={{ 'margin-right': '8px' }} />
                    자기소개
                  </div>
                  <div className="A">
                    {(() => {
                      if (selectedUser.tag.toString().split('#')[1]) {
                        return (
                          <Badge
                            keyword={selectedUser.tag.toString().split('#')[1]}
                            style={{ color: 'black' }}
                            color="a"
                          />
                        );
                      }
                    })()}

                    {(() => {
                      if (selectedUser.tag.toString().split('#')[2]) {
                        return (
                          <Badge
                            keyword={selectedUser.tag.toString().split('#')[2]}
                            color="b"
                          />
                        );
                      }
                    })()}
                    {(() => {
                      if (selectedUser.tag.toString().split('#')[3]) {
                        return (
                          <Badge
                            keyword={selectedUser.tag.toString().split('#')[3]}
                            color="c"
                          />
                        );
                      }
                    })()}
                    {(() => {
                      if (selectedUser.tag.toString().split('#')[4]) {
                        return (
                          <Badge
                            keyword={selectedUser.tag.toString().split('#')[4]}
                            color="d"
                          />
                        );
                      }
                    })()}
                    {(() => {
                      if (selectedUser.tag.toString().split('#')[5]) {
                        return (
                          <Badge
                            keyword={selectedUser.tag.toString().split('#')[5]}
                            color="e"
                          />
                        );
                      }
                    })()}
                    {(() => {
                      if (selectedUser.tag.toString().split('#')[6]) {
                        return (
                          <Badge
                            keyword={selectedUser.tag.toString().split('#')[6]}
                            style={{ color: 'black' }}
                            color="a"
                          />
                        );
                      }
                    })()}

                    {(() => {
                      if (selectedUser.tag.toString().split('#')[7]) {
                        return (
                          <Badge
                            keyword={selectedUser.tag.toString().split('#')[7]}
                            color="b"
                          />
                        );
                      }
                    })()}
                    {(() => {
                      if (selectedUser.tag.toString().split('#')[8]) {
                        return (
                          <Badge
                            keyword={selectedUser.tag.toString().split('#')[8]}
                            color="c"
                          />
                        );
                      }
                    })()}
                    {(() => {
                      if (selectedUser.tag.toString().split('#')[9]) {
                        return (
                          <Badge
                            keyword={selectedUser.tag.toString().split('#')[9]}
                            color="d"
                          />
                        );
                      }
                    })()}
                    {(() => {
                      if (selectedUser.tag.toString().split('#')[10]) {
                        return (
                          <Badge
                            keyword={selectedUser.tag.toString().split('#')[10]}
                            color="e"
                          />
                        );
                      }
                    })()}
                  </div>
                </div>
                <div className="Row">
                  <div className="Q">
                    <LooksIcon style={{ 'margin-right': '8px' }} />
                    종교
                  </div>
                  <div className="A">{selectedUser.religion}</div>
                </div>
                <div className="Row">
                  <div className="Q">
                    <SmokeFreeIcon style={{ 'margin-right': '8px' }} />
                    흡연여부
                  </div>
                  <div className="A">{selectedUser.smoke}</div>
                </div>
                <div className="Row">
                  <div className="Q" style={{ 'word-break': 'keep-all' }}>
                    <ChatIcon
                      style={{
                        'margin-right': '8px',
                      }}
                    />
                    대화하기(클릭)
                  </div>
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
                          <a style={{ 'text-decoration': 'underline' }}>
                            {selectedUser.chatlink}
                          </a>
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
                          <a style={{ 'text-decoration': 'underline' }}>
                            {selectedUser.chatlink}
                          </a>
                        </div>
                      );
                    }
                  })()}
                  {/* <div
                    className="A"
                    style={{ 'overflow-wrap': 'break-word' }}
                    onClick={() => {
                      window.open(`${selectedUser.chatlink}`);
                    }}
                  >
                    <a>{selectedUser.chatlink}</a>
                  </div> */}
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
            >
              <Typography></Typography>
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
