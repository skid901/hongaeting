import React from 'react';
import { useHistory } from 'react-router-dom';

import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { inject, observer } from 'mobx-react';

// app bar 스크롤 숨김
const HideOnScroll = props => {
  const { children } = props;
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

const login = false;

const CustomAppBar = props => {
  const history = useHistory();

  return (
    <>
      {login === true ? (
        <div>
          <CssBaseline />
          <HideOnScroll {...props}>
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
                        role="presentation"
                      >
                        홍개팅
                      </p>
                      <div className="menu-wrapper">
                        <ol className="menulist">
                          <li className="selso">
                            <span
                              className="atag"
                              onClick={() => {
                                history.push(`/selfdatinglist`);
                              }}
                              role="presentation"
                            >
                              <span className="text">#홍셀소</span>
                            </span>
                          </li>
                          <li className="meeting">
                            <span
                              className="atag"
                              onClick={() => {
                                history.push(`/selfmeetinglist`);
                              }}
                              role="presentation"
                            >
                              <span className="text">#홍미팅</span>
                            </span>
                          </li>
                        </ol>
                      </div>
                    </div>
                    <div className="end">
                      <IconButton
                        color="inherit"
                        onClick={() => {
                          history.push(`/mypage/test`);
                        }}
                      >
                        <ExitToAppIcon />
                      </IconButton>
                      <IconButton
                        color="inherit"
                        onClick={() => {
                          history.push(`/mypage/test`);
                        }}
                      >
                        <AccountCircle />
                      </IconButton>
                    </div>
                  </div>
                  {/* <div className="secondbar">
                <ol className="viewlist">
                  <li className="view">
                    <Button
                      style={{ 'font-family': 'Noto Sans KR, sans-serif' }}
                    >
                      전체보기
                    </Button>
                  </li>
                  <li className="view">
                    <Button
                      style={{ 'font-family': 'Noto Sans KR, sans-serif' }}
                    >
                      남자보기
                    </Button>
                  </li>
                  <li className="view">
                    <Button
                      style={{ 'font-family': 'Noto Sans KR, sans-serif' }}
                    >
                      여자보기
                    </Button>
                  </li>
                </ol>
              </div> */}
                </nav>
              </div>
            </AppBar>
          </HideOnScroll>
        </div>
      ) : (
        <div>
          {' '}
          <CssBaseline />
          <HideOnScroll {...props}>
            <AppBar style={{ 'font-family': 'Noto Sans KR, sans-serif' }}>
              <div className="global-navbar">
                <nav className="navbar">
                  <div className="firstbar">
                    <div className="start">
                      <p
                        className="logo"
                        role="presentation"
                        onClick={() => {
                          history.push(`/`);
                        }}
                      >
                        홍개팅
                      </p>
                      <div className="menu-wrapper">
                        <ol className="menulist">
                          <li className="selso">
                            <p
                              className="atag"
                              role="presentation"
                              onClick={() => {
                                history.push(`/selfdatinglist`);
                              }}
                            >
                              <span className="text">#홍셀소</span>
                            </p>
                          </li>
                          <li className="meeting">
                            <p
                              className="atag"
                              role="presentation"
                              onClick={() => {
                                history.push(`/selfmeetinglist`);
                              }}
                            >
                              <span className="text">#홍미팅</span>
                            </p>
                          </li>
                        </ol>
                      </div>
                    </div>
                    <div className="end">
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
                    </div>
                  </div>
                  <div className="secondbar" />
                </nav>
              </div>
            </AppBar>
          </HideOnScroll>
        </div>
      )}

      {/* <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
            <nav>
              <Typography
                className="logo"
                variant="h6"
                onClick={() => {
                  history.push(`/`);
                }}
              >
                홍개팅
              </Typography>
            </nav>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar /> */}
    </>
  );
};

export default inject(({ user }) => ({
  email: user.email,
  authEmail: user.authEmail,
}))(observer(CustomAppBar));
