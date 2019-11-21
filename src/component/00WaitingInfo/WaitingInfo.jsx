import React, { useContext, useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { observer, MobXProviderContext } from 'mobx-react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';

import './WaitingInfo.scss';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const useStyles1 = makeStyles({
  root: {
    width: 300,
    background: 'linear-gradient(45deg, white 30%, white 90%)',
    border: 0,
    borderRadius: 3,
    color: 'black',
    height: 48,
    padding: '0 30px',
  },
});

const WaitingInfo = () => {
  const history = useHistory();
  const classes1 = useStyles1();
  const { alert, user } = useContext(MobXProviderContext);

  const [state, setState] = useState({
    email: '',
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
      handleAlert(`인증문자 미입력`, `인증문자를 입력해주세요.`);
      return;
    }

    try {
      // 인증 메일 발송
      const useranswer = state.email;
      const rightanswer = 'MerryChristmas';

      if (rightanswer !== useranswer) {
        console.log('incorrect');
        handleAlert(
          `죄송합니다.`,
          `홍개팅 신청학우만 이용가능합니다.
        아래 버튼을 눌러 홍개팅을 신청해주세요. ^ㅇ^`,
        );
        return;
      }
      if (rightanswer === useranswer) {
        console.log('correct');
        handleAlert(
          `환영합니다.`,
          `1:1 소개팅만 신청하셨다면, 셀프 소개팅과 홍미팅을 등록해보세요! 여러 학우들의 연락을 받으실 수 있답니다.`,
        );
        history.push('./selfdatinglist');
        // ctx.status = 200;
        // ctx.body = `{"message" :"correct"}`;
        return;
      }

      // const { data } = await axios.post(
      //   // `${process.env.REACT_APP_API_URI}/api/auth/signIn`,
      //   `/api/auth/signIn`,
      //   { ...state },
      // );
      // message = data.message || ``;

      // 결과 오류 처리
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
        light: '#f06595',
        main: '#f06595',
        dark: '#f06595',
        contrastText: '#fff',
      },
    },
  });

  return (
    <div>
      <AppBar style={{ 'font-family': 'Noto Sans KR, sans-serif' }}>
        <div className="global-navbar">
          <nav className="navbar">
            <div className="firstbar">
              <div className="start">
                <p
                  className="logo"
                  onClick={() => {
                    history.push(`/`);
                  }}
                >
                  홍개팅 시즌3
                </p>
                <div className="menu-wrapper">
                  <ol className="menulist">
                    <li className="selso">
                      <div
                        className="atag"
                        onClick={() => {
                          handleAlert(
                            `안녕하세요 ^ㅇ^`,
                            `인증문자를 먼저 입력해주세요!`,
                          );
                          // history.push(`/selfdatinglist`);
                        }}
                      >
                        <span className="text1">#홍셀소</span>
                      </div>
                    </li>
                    <li className="meeting">
                      <div
                        className="atag"
                        onClick={() => {
                          handleAlert(
                            `반갑습니다 ^ㅇ^`,
                            `인증문자를 먼저 입력해주세요!`,
                          );
                          // history.push(`/selfmeetinglist`);
                        }}
                      >
                        <span className="text2">#홍미팅</span>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
              {/* <div className="end">
                      <IconButton
                        color="inherit"
                        onClick={() => {
                          history.push(`/signin`);
                        }}
                      >
                        <Button
                          variant=""
                          style={{
                            'font-weight': 'bold',
                            color: '#085f63',
                            'border-color': '#085f63',
                            'font-family': 'Noto Sans KR, sans-serif',
                            'padding-top': '10px',
                            'font-size': '14px',
                            'letter-spacing': '-0.4px',
                            'line-height': '1.43',
                          }}
                        >
                          로그인
                        </Button>
                      </IconButton>
                    </div> */}
            </div>
          </nav>
        </div>
      </AppBar>
      <ThemeProvider theme={mainTheme}>
        <div className="waitinginfo">
          <div className="blankspace">
            대학생의 로망 CC 라이프,
            <br />
            <span className="season3" style={{ 'font-weight': 'bold' }}>
              홍개팅 시즌3
            </span>
            에서 만들어보아요!
          </div>
          <br />
          <div className="subtitle">
            전달받으신 인증문자를 입력해주시면 <br />
            <span className="bold">셀프 소개팅</span>과
            <span className="bold"> 홍미팅</span>을 보실 수 있어요!
          </div>
          <div className="SignIn">
            <Container className="input" maxWidth="sm">
              <FormControl fullWidth>
                <InputLabel
                  htmlFor="id"
                  style={{
                    'font-family': 'Noto Sans KR, sans-serif',
                    'text-align': 'center',
                  }}
                >
                  인증문자를 여기에 입력해주세요
                </InputLabel>
                <Input
                  type="email"
                  placeholder="대소문자 및 띄어쓰기 확인 부탁드려요."
                  value={state.email}
                  onChange={handleChange('email')}
                  autoComplete="off"
                  required
                />
              </FormControl>
              <Container className="signUpLink" maxWidth="sm">
                {/* <span
                  style={{
                    'font-family': 'Noto Sans KR, sans-serif',
                  }}
                >
                  {`인증문자를 전달받지 못하셨나요?`}&nbsp;&nbsp;
                  <a
                    style={{
                      'font-family': 'Noto Sans KR, sans-serif',
                    }}
                    href="http://pf.kakao.com/_xjeFmT"
                  >
                    문의하기
                  </a>
                </span> */}
              </Container>
            </Container>

            <Container className="input button" maxWidth="sm">
              <Button
                size="large"
                variant="contained"
                style={{
                  'background-color': '#D92B6C',
                  color: 'white',
                  'font-family': 'Noto Sans KR, sans-serif',
                }}
                fullWidth
                onClick={handleClick}
              >
                참여하기
              </Button>
            </Container>
          </div>
          <Container>
            <Container
              className="signUpLink"
              maxWidth="sm"
              style={{ 'text-align': 'center' }}
            >
              <a
                style={{
                  'font-family': 'Noto Sans KR, sans-serif',
                  'text-decoration': 'underline',
                  'text-underline-position': 'under',
                  'font-size': '11px',
                }}
                href="https://docs.google.com/forms/d/e/1FAIpQLSeoMtZdUinyboZnQf_vl69-Zl7912coTedQnlaWor8cvPjZKQ/viewform"
              >
                {`홍개팅을 신청하시면 인증문자를 알려드려요.`}
              </a>
            </Container>
          </Container>
        </div>
      </ThemeProvider>
    </div>
  );
};

export default WaitingInfo;
