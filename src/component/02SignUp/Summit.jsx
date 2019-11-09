import React from 'react';
import { useHistory } from 'react-router-dom';
import './Summit.scss';

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const Summit = () => {
  const history = useHistory();
  return (
    <div className="Summit">
      <Container className="notice" maxWidth="sm">
        <Paper>
          <Typography variant="h6" gutterBottom>
            {`홍익대학교 이메일을 확인해주세요.`}
          </Typography>
          <Typography variant="body2" gutterBottom>
            {`회원가입 시 입력한 홍익대학교 이메일을 확인해주세요.`}
          </Typography>
          <Typography variant="body2" gutterBottom>
            {`이메일이 오지 않았다면 스팸메일함을 확인해주세요.`}
          </Typography>
          <Typography variant="body2" gutterBottom>
            {`비밀번호가 기억나지 않는다면 `}
            <a
              href="http://it.hongik.ac.kr/dept/it/o365_pw_reset.html"
              target="_blank"
              rel="noopener noreferrer"
              color="#0045ce"
            >
              이 곳
            </a>
            {`을 참고해주세요.`}
          </Typography>
          <Typography variant="body2" gutterBottom>
            {`특별한 문제가 발생할 경우 관리자에게 연락주세요.`}
          </Typography>
        </Paper>
        <Button
          variant="contained"
          style={{ 'background-color': '#085F63', color: 'white' }}
          fullWidth
          onClick={() => {
            history.push(`/signin`);
          }}
        >
          로그인 화면으로 이동
        </Button>
      </Container>
    </div>
  );
};

export default Summit;
