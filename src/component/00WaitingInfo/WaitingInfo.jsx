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
          `상대방에게 꼭 예의를 지켜주세요!! 우리 같이 홍개팅 문화를 만들어나가보아요`,
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
          <div className="blankspace">.</div>
          <div className="SignIn">
            {/* <div className="title" maxWidth="sm">
            Quiz. " 홍개팅 신청확인을 위한 퀴즈입니다."
            <br />
            Q. 카카오톡에서 받은 인증문자를 입력해주세요!
          </div> */}
            <Container className="input" maxWidth="sm">
              <FormControl fullWidth>
                <InputLabel
                  htmlFor="id"
                  style={{ 'font-family': 'Noto Sans KR, sans-serif' }}
                >
                  "인증문자를 여기에 입력해주세요"
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
            </Container>
            <Container className="input button" maxWidth="sm">
              <Button
                variant="contained"
                style={{
                  'background-color': 'white',
                  color: 'black',
                  'font-weight': 'bold',
                  'font-family': 'Noto Sans KR, sans-serif',
                }}
                fullWidth
                onClick={handleClick}
              >
                인증하고 홍개팅 참여하기
              </Button>
            </Container>
            <Container className="signUpLink" maxWidth="sm">
              <span
                style={{
                  'font-family': 'Noto Sans KR, sans-serif',
                }}
              >
                {`인증문자를 전달받지 못하셨나요?`}&nbsp;&nbsp;
                <a
                  style={{
                    'font-family': 'Noto Sans KR, sans-serif',
                  }}
                  href="https://open.kakao.com/o/sm9N2kBb"
                >
                  문의하기
                </a>
                <p
                  style={{
                    'font-family': 'Noto Sans KR, sans-serif',
                    'text-decoration': 'underline',
                  }}
                >
                  홍개팅을 신청한 학우만 참여할 수 있습니다.
                </p>
              </span>
            </Container>
          </div>
          <Container>
            <div style={{ 'text-align': 'center' }}>
              <Button
                className={classes1.root}
                style={{
                  'font-family': 'Noto Sans KR, sans-serif',
                  'font-weight': 'bold',
                }}
                onClick={() => {
                  window.open(
                    'https://docs.google.com/forms/d/e/1FAIpQLSeoMtZdUinyboZnQf_vl69-Zl7912coTedQnlaWor8cvPjZKQ/viewform',
                  );
                }}
                // onClick={() => {
                //   history.push('/introductionform');
                // }}
              >
                셀프 소개팅 신청하기 (클릭)
              </Button>
            </div>
            <div style={{ 'text-align': 'center' }}>
              <Button
                className={classes1.root}
                style={{
                  'font-family': 'Noto Sans KR, sans-serif',
                  'font-weight': 'bold',
                }}
                onClick={() => {
                  window.open(
                    'https://docs.google.com/forms/d/e/1FAIpQLSfgViP8n8uXJKWXxUxrh1RsBQ0rIQ-t7j3ow4bDphcrQ4ZHvg/viewform',
                  );
                }}
              >
                홍미팅 신청하기 (클릭)
              </Button>
            </div>
          </Container>
        </div>
      </ThemeProvider>
    </div>
  );
};
// if (message === `noEmail`) {
//   handleAlert(
//     `이메일 오류`,
//     `해당 이메일로 가입된 계정이 없습니다.\n이메일을 다시 입력해주세요.`,
//   );
//   return;
// }
// if (message === `invalidPassword`) {
//   handleAlert(
//     `패스워드 오류`,
//     `잘못된 패스워드입니다.\n패스워드를 다시 입력해주세요.`,
//   );
//   return;
// }
// if (message === `noAuth`) {
//   handleAlert(
//     `홍대 이메일 미인증`,
//     `아직 인증되지 않은 계정입니다.\n회원가입 시 입력한 홍대 이메일을 확인해주세요.`,
//   );
//   return;
// }
export default WaitingInfo;
