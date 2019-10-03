import React from 'react';
import { useParams } from 'react-router-dom';
import './Auth.scss';

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const Auth = () => {
  const { code } = useParams();
  return (
    <div className="Auth">
      <Container className="notice" maxWidth="sm">
        <Paper>
          <Typography variant="h6" gutterBottom>
            {`회원가입이 완료되었습니다.`}
          </Typography>
          <Typography variant="body2" gutterBottom>
            {`안녕하세요, ${code} 님.`}
          </Typography>
          <Typography variant="body2" gutterBottom>
            {`홍개팅에 오신걸 환영합니다.`}
          </Typography>
          <Typography variant="body2" gutterBottom>
            {`홍개팅을 통해 특별한 인연을 만들어보세요.`}
          </Typography>
        </Paper>
        <Button variant="contained" color="primary" fullWidth>
          로그인 화면으로 이동
        </Button>
      </Container>
    </div>
  );
};

export default Auth;
