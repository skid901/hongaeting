import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import './MeetingForm.scss';

function MeetingForm() {
  const useStyles1 = makeStyles({
    root: {
      width: 300,
      background: 'linear-gradient(45deg, #085F63 30%, #085F63 90%)',
      border: 0,
      borderRadius: 3,
      color: 'white',
      height: '48px',
      padding: '0 30px',
    },
  });

  const history = useHistory();
  const classes1 = useStyles1();

  return (
    <div className="meeting-form">
      <div className="comment">
        {/* {`설문지 제출을 완료 했다면!! `} */}
        <div style={{ 'text-align': 'center' }}>
          <Button
            className={classes1.root}
            style={{ 'font-family': 'Noto Sans KR, sans-serif' }}
            onClick={() => {
              history.push('/selfmeetinglist');
            }}
          >
            홍미팅 리스트 보러가기
          </Button>
        </div>
        {/* {`클릭`} */}
      </div>

      <div className="iframe-wrapper-meeting">
        <iframe
          title="meeting-form"
          src="https://docs.google.com/forms/d/e/1FAIpQLSfgViP8n8uXJKWXxUxrh1RsBQ0rIQ-t7j3ow4bDphcrQ4ZHvg/viewform"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        >
          로드 중…
        </iframe>
      </div>
    </div>
  );
}

export default MeetingForm;
