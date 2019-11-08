import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import './IntroductionForm.scss';

function IntroductionForm() {
  const useStyles1 = makeStyles({
    root: {
      width: 300,
      background: 'linear-gradient(45deg, #085F63 30%, #085F63 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    },
  });

  const history = useHistory();
  const classes1 = useStyles1();

  return (
    <div className="intriduction-form">
      <div className="comment">
        {`설문지 제출을 완료 했다면!! `}
        <div style={{ 'text-align': 'center' }}>
          <Button
            className={classes1.root}
            style={{ 'font-family': 'Noto Sans KR, sans-serif' }}
            onClick={() => {
              history.push('/selfdatinglist');
            }}
          >
            셀프 리스트 보러가기
          </Button>
        </div>
        {/* {`클릭`} */}
      </div>

      <div className="iframe-wrapper">
        <iframe
          title="introduction-form"
          src="https://docs.google.com/forms/d/e/1FAIpQLSeoMtZdUinyboZnQf_vl69-Zl7912coTedQnlaWor8cvPjZKQ/viewform"
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

export default IntroductionForm;
