import React, { useState, useEffect, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { MobXProviderContext } from 'mobx-react';
import axios from 'axios';

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const Auth = () => {
  //
  const { hashedAuthEmail } = useParams();

  const history = useHistory();

  const { alert } = useContext(MobXProviderContext);

  const [nickName, setNickName] = useState(``);

  const handleAlert = (_title, _message) => {
    alert.setIsOpen(true);
    alert.setTitle(`${_title}`);
    alert.setMessage(`${_message}`);
  };

  useEffect(() => {
    (async () => {
      // 인증 확인
      const { data } = await axios.post(
        // `${process.env.REACT_APP_API_URI}/api/auth/authEmail`,
        `/api/auth/authEmail`,
        { hashedAuthEmail },
      );

      // 결과 처리
      const { message } = data;
      if (message === `noAuthEmail`) {
        history.push(`/errorpage`);
        return;
      }
      if (message === `alreadyAuthed`) {
        handleAlert(
          `인증 오류`,
          `이미 인증 절차가 완료된 회원입니다. 로그인 화면으로 이동합니다.`,
        );
        history.push(`/signin`);
        return;
      }

      setNickName(data.nickName);
    })();
  }, []);

  return (
    <div className="Auth">
      <Container className="notice" maxWidth="sm">
        <Paper>
          <Typography variant="h6" gutterBottom>
            {`회원가입이 완료되었습니다.`}
          </Typography>
          <Typography variant="body2" gutterBottom>
            {`안녕하세요, ${nickName} 님.`}
          </Typography>
          <Typography variant="body2" gutterBottom>
            {`홍개팅에 오신걸 환영합니다.`}
          </Typography>
          <Typography variant="body2" gutterBottom>
            {`홍개팅을 통해 특별한 인연을 만들어보세요.`}
          </Typography>
        </Paper>
        <Button
          variant="contained"
          color="primary"
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

export default Auth;
