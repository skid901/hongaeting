import React from 'react';
import { useParams } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import './MyPage.scss';

const useStyles = makeStyles(theme => ({
  root: {
    margin: 'auto',
    width: '100%',
    maxWidth: 720,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  avatar: {
    margin: 10,
  },
  orangeAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepOrange[500],
  },
  purpleAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepPurple[500],
  },
}));

const MyPage = () => {
  //
  const { nickName } = useParams();
  const classes = useStyles();

  return (
    <div>
      <div className="profile-wrapper">
        <div className="profile-box">
          <div className="img">
            <AccountBoxIcon style={{ width: '77px', height: '77px' }} />
          </div>
          <div className="Infobox">
            <div className="inline-block-wrapper">
              <p className="nickname">outwater{`${nickName}`}</p>
            </div>
            <div className="inline-block-wrapper">
              <span>#태그1 #태그2 #태그3</span>
              <p> 자기소개 한마디 주르르르르를르르르르르르르륵</p>
            </div>
          </div>
        </div>
      </div>
      <div className="MenuName">
        <p className="MenuName"> 채팅방 리스트</p>
      </div>
      <div>
        <List className={classes.root}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                className={classes.orangeAvatar}
                style={{ 'font-size': '11px' }}
              >
                1:1매칭
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="닉네임1"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  ></Typography>
                  {' — 대화내용이 여기에 나오게 하면 좋겠는데!!'}
                </React.Fragment>
              }
            />
            <div className="timebar" style={{ 'font-size': '11px' }}>
              11월14일
            </div>
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                className={classes.orangeAvatar}
                style={{ 'font-size': '14px' }}
              >
                셀소
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="닉네임2"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  ></Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
            <div className="timebar" style={{ 'font-size': '11px' }}>
              11월14일
            </div>
          </ListItem>{' '}
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                className={classes.orangeAvatar}
                style={{ 'font-size': '14px' }}
              >
                셀소
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="닉네임2"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  ></Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
            <div className="timebar" style={{ 'font-size': '11px' }}>
              11월14일
            </div>
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                className={classes.orangeAvatar}
                style={{ 'font-size': '14px' }}
              >
                셀소
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="닉네임2"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  ></Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
            <div className="timebar" style={{ 'font-size': '11px' }}>
              11월14일
            </div>
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                className={classes.purpleAvatar}
                style={{ 'font-size': '14px' }}
              >
                셀미
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Test1234"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  ></Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </React.Fragment>
              }
            />
            <div className="timebar" style={{ 'font-size': '11px' }}>
              11월14일
            </div>
          </ListItem>
        </List>
      </div>
    </div>
  );
};

export default MyPage;
