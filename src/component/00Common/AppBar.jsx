import React from 'react';

import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';

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

const CustomAppBar = props => (
  <>
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
  </>
);

export default CustomAppBar;
