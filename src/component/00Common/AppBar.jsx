import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { inject, observer, MobXProviderContext } from 'mobx-react';

import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import axios from '../../../node_modules/axios/index';

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

const CustomAppBar = ({ props }) => {
  const history = useHistory();
  const { user, alert } = useContext(MobXProviderContext);
  const handleAlert = (_title, _message) => {
    alert.setIsOpen(true);
    alert.setTitle(`${_title}`);
    alert.setMessage(`${_message}`);
  };
  const handleLogout = async event => {
    event.preventDefault();
    try {
      let message = ``;
      const { data } = await axios.post(`/api/auth/logout`, {});
      message = data.message || ``;
      if (message === 'logout') {
        user.setEmail('');
        user.setNickName('');
        user.setSex('');
        user.setAuthEmail('');
        history.push(`/signin`);
      }
    } catch (e) {
      handleAlert('서버 오류', '관리자에게 문의해주세요.');
      history.push(`/signin`);
    }
  };
  console.log(history);
  return (
    <>
      {user.email === '' ? (
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
                      >
                        홍개팅
                      </p>
                      <div className="menu-wrapper">
                        <ol className="menulist">
                          <li className="selso">
                            <div
                              className="atag"
                              onClick={() => {
                                history.push(`/selfdatinglist`);
                              }}
                            >
                              <span className="text1">#홍셀소</span>
                            </div>
                          </li>
                          <li className="meeting">
                            <div
                              className="atag"
                              onClick={() => {
                                history.push(`/selfmeetinglist`);
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
          </HideOnScroll>
        </div>
      ) : (
        <div>
          <CssBaseline />
          <HideOnScroll {...props}>
            <AppBar style={{ 'font-family': 'Noto Sans KR, sans-serif' }}>
              <div className="global-navbar">
                <nav className="navbar">
                  <div className="firstbar">
                    <div className="start">
                      <span
                        className="logo"
                        onClick={() => {
                          history.push(`/`);
                        }}
                        role="button"
                      >
                        홍개팅
                      </span>
                      <div className="menu-wrapper">
                        <ol className="menulist">
                          <li className="selso">
                            <p
                              className="atag"
                              onClick={() => {
                                history.push(`/selfdatinglist`);
                              }}
                            >
                              <span className="text1">#홍셀소</span>
                            </p>
                          </li>
                          <li className="meeting">
                            <p
                              className="atag"
                              onClick={() => {
                                history.push(`/selfmeetinglist`);
                              }}
                            >
                              <span className="text2">#홍미팅</span>
                            </p>
                          </li>
                        </ol>
                      </div>
                    </div>
                    {/* <div className="end">
                      <IconButton color="inherit" onClick={handleLogout}>
                        <ExitToAppIcon />
                      </IconButton>
                      <IconButton
                        color="inherit"
                        onClick={() => {
                          history.push(`/mypage/${user.nickName}`);
                        }}
                      >
                        <AccountCircle />
                      </IconButton>
                    </div> */}
                  </div>
                </nav>
              </div>
            </AppBar>
          </HideOnScroll>
        </div>
      )}
    </>
  );
};

export default inject(({ user }) => ({
  email: user.email,
}))(observer(CustomAppBar));
