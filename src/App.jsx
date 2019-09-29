import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import RootStore from 'store/RootStore';
import './App.scss';

import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';

import Router from './Router';

const rootStore = new RootStore();

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

const App = props => (
  <Provider {...rootStore}>
    <BrowserRouter>
      <div className="App">
        <CssBaseline />
        <HideOnScroll {...props}>
          <AppBar>
            <Toolbar>
              <nav>
                <Typography className="logo" variant="h6">
                  홍개팅
                </Typography>
              </nav>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
        <Toolbar />
        <Router />
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;
