import React, { useContext, useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { observer, MobXProviderContext } from 'mobx-react';
import axios from 'axios';
import './SignIn.scss';

import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const SignIn = observer(() => {
  //
  const history = useHistory();

  const { alert, user } = useContext(MobXProviderContext);

  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const handleChange = key => event => {
    setState({ ...state, [key]: event.target.value });
  };

  const handleAlert = (_title, _message) => {
    alert.setIsOpen(true);
    alert.setTitle(`${_title}`);
    alert.setMessage(`${_message}`);
  };

  const handleClick = async event => {
    event.preventDefault();

    // 미입력 검사
    if (state.email === '') {
      handleAlert(`이메일 미입력`, `이메일을 입력해주세요.`);
      return;
    }
    if (state.password === '') {
      handleAlert(`패스워드 미입력`, `패스워드를 입력해주세요.`);
      return;
    }

    // 유효성 검사
    if (
      !/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i.test(
        state.email,
      )
    ) {
      handleAlert(
        `이메일 재확인`,
        `이메일을 형식에 맞게 입력했는지 확인해주세요.`,
      );
      return;
    }

    try {
      // 인증 메일 발송
      let message = ``;
      const { data } = await axios.post(
        // `${process.env.REACT_APP_API_URI}/api/auth/signIn`,
        `/api/auth/signIn`,
        { ...state },
      );
      message = data.message || ``;

      // 결과 오류 처리
      if (message === `noEmail`) {
        handleAlert(
          `이메일 오류`,
          `해당 이메일로 가입된 계정이 없습니다.\n이메일을 다시 입력해주세요.`,
        );
        return;
      }
      if (message === `invalidPassword`) {
        handleAlert(
          `패스워드 오류`,
          `잘못된 패스워드입니다.\n패스워드를 다시 입력해주세요.`,
        );
        return;
      }
      if (message === `noAuth`) {
        handleAlert(
          `홍대 이메일 미인증`,
          `아직 인증되지 않은 계정입니다.\n회원가입 시 입력한 홍대 이메일을 확인해주세요.`,
        );
        return;
      }

      // 유저 정보 저장
      user.setEmail(data.email);
      user.setNickName(data.nickName);
      user.setSex(data.sex);
      user.setAuthEmail(data.authEmail);

      // 마이페이지로 이동
      // history.push(`/mypage/${data.nickName || ``}`);
      history.push(`/demo`);
    } catch (e) {
      handleAlert(`서버 오류`, `관리자에게 문의 부탁드립니다.`);
    }
  };

  const handleKeyUp = event => {
    if (event.keyCode === 13) {
      handleClick(event);
    }
  };
  const mainTheme = createMuiTheme({
    palette: {
      primary: {
        light: '#085F63',
        main: '#085F63',
        dark: '#085F63',
        contrastText: '#fff',
      },
    },
  });
  return (
    <div className="SignIn">
      <ThemeProvider theme={mainTheme}>
        <Container className="title" maxWidth="sm">
          로그인
        </Container>
        <Container className="input" maxWidth="sm">
          <FormControl fullWidth>
            <InputLabel htmlFor="id">이메일</InputLabel>
            <Input
              type="email"
              placeholder="이메일을 입력해주세요."
              value={state.email}
              onChange={handleChange('email')}
              autoComplete="off"
              required
            />
          </FormControl>
        </Container>
        <Container className="input" maxWidth="sm">
          <FormControl fullWidth>
            <InputLabel htmlFor="password">패스워드</InputLabel>
            <Input
              type="password"
              placeholder="패스워드를 입력해주세요."
              value={state.password}
              onChange={handleChange('password')}
              onKeyUp={handleKeyUp}
              autoComplete="off"
              required
            />
          </FormControl>
        </Container>
        <Container className="input button" maxWidth="sm">
          <Button
            variant="contained"
            style={{ 'background-color': '#085F63', color: 'white' }}
            fullWidth
            onClick={handleClick}
          >
            로그인
          </Button>
        </Container>
        <Container className="signUpLink" maxWidth="sm">
          <span>
            {`아직 홍개팅 계정이 없으신가요?`}&nbsp;&nbsp;
            <Link to="/signup/form">회원가입</Link>
          </span>
        </Container>
      </ThemeProvider>
    </div>
  );
});

export default SignIn;
