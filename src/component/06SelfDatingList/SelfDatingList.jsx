import React, { useState, useEffect, useContext } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Favorite from '@material-ui/icons/Favorite';
import Paper from '@material-ui/core/Paper';
import People from '@material-ui/icons/People';
import InputAdornment from '@material-ui/core/InputAdornment';
import CircularProgress from '@material-ui/core/CircularProgress';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import { inject, observer } from 'mobx-react';
import './SelfDatingList.scss';

import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  withRouter,
  useHistory,
} from 'react-router-dom';

import Container from '@material-ui/core/Container';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import Badge from './Badge';
import SplitButton from './SplitButton';

import selfdatingdetails from '../07SelfDatingDetails/SelfDatingDetails';
import Axios from '../../../node_modules/axios/index';

const useStyles1 = makeStyles({
  root: {
    width: 300,
    background: 'linear-gradient(45deg, #3f51b5 30%, #FE6B8B 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'black',
    height: 48,
    padding: '0 30px',
  },
});

const SelfDatingList = ({ userList, setTableData, updated, IsLoading }) => {
  const history = useHistory();
  const [searchKeyword, setSearchKeyword] = useState('');
  // const [IsLoading, setIsLoading] = useState(false);
  const classes1 = useStyles1();
  useEffect(() => {
    setTableData();
    console.log(searchKeyword === false);
    console.log(updated);
    console.log(IsLoading);
  }, [IsLoading]);

  return (
    <div className="Template">
      <div className="global-navbar">
        <nav className="navbar">
          <div className="firstbar">
            <div className="start">
              <a className="logo" href="http://localhost:3000/selfdatinglist">
                홍개팅
              </a>
              <div className="menu-wrapper">
                <ol className="menulist">
                  <li className="selso">
                    <a
                      className="atag"
                      href="http://localhost:3000/selfdatinglist"
                    >
                      <span className="text">#홍셀소</span>
                    </a>
                  </li>
                  <li className="meeting">
                    <a
                      className="atag"
                      href="http://localhost:3000/selfdatinglist"
                    >
                      <span className="text">#홍미팅</span>
                    </a>
                  </li>
                </ol>
              </div>
            </div>
            <div className="end">
              <IconButton
                color="inherit"
                src="http://localhost:3000/selfdatinglist"
              >
                <AccountCircle />
              </IconButton>
            </div>
          </div>
          <div className="secondbar">
            <ol className="viewlist">
              <li className="view">
                <Button style={{ 'font-family': 'Do Hyeon, sans-serif' }}>
                  전체보기
                </Button>
              </li>
              <li className="view">
                <Button style={{ 'font-family': 'Do Hyeon, sans-serif' }}>
                  남자보기
                </Button>
              </li>
              <li className="view">
                <Button style={{ 'font-family': 'Do Hyeon, sans-serif' }}>
                  여자보기
                </Button>
              </li>
            </ol>
          </div>
        </nav>
      </div>
      <p className="title">홍익 셀프 소개팅😎 </p>
      <div className="input" maxWidth="sm" style={{ 'padding-bottom': '0px' }}>
        {/* <SplitButton /> */}
        <Container
          className="input"
          maxWidth="sm"
          style={{ 'padding-bottom': '0px' }}
        >
          <div style={{ 'text-align': 'center' }}>
            <Button
              className={classes1.root}
              style={{ 'font-family': 'Do Hyeon, sans-serif' }}
            >
              홍개팅 신청하기
            </Button>
          </div>
          <TextField
            label="키워드를 검색하세요🔍"
            type="search"
            className="searchfield"
            margin="normal"
            variant="outlined"
            value={searchKeyword}
            onChange={e => setSearchKeyword(e.target.value)}
            autoComplete="off"
            fullWidth
          />
        </Container>
      </div>
      {IsLoading ? (
        <div>
          <div> 잠시만기다려주세요...</div>
          <div>
            <CircularProgress />
            <CircularProgress color="secondary" />
          </div>
        </div>
      ) : (
        <div className="CardsWrapper">
          <Container className="input" maxWidth="sm">
            {(() => {
              let result = null;
              if (updated) {
                result = searchKeyword
                  ? userList
                      .filter(
                        item =>
                          item.collage.indexOf(searchKeyword) >= 0 ||
                          item.religion.indexOf(searchKeyword) >= 0 ||
                          item.personality.indexOf(searchKeyword) >= 0 ||
                          item.hobby.indexOf(searchKeyword) >= 0,
                      )
                      .map(user => <Cards user={user} history={history} />)
                  : userList.map(user => (
                      <Cards user={user} history={history} />
                    ));
              }
              return result;
            })()}
          </Container>
        </div>
      )}
    </div>
  );
};

@inject(({ userlist }) => ({
  setSelectedUser: userlist.setSelectedUser,
}))
@observer
class Cards extends React.Component {
  render() {
    const { setSelectedUser, user, history } = this.props;
    const url = `/selfdatingdetails/${user.kakaoid}`;
    // const useStyles = makeStyles({
    //   root: {
    //     'padding-top': '10px',
    //   },
    // });
    // const classes = useStyles();
    return (
      <div className="CardsWrapper">
        <Card
          onClick={() => {
            setSelectedUser(
              user.time,
              user.email,
              user.kakaoid,
              user.sex,
              user.age,
              user.collage,
              user.appearance,
              user.religion,
              user.personality,
              user.hobby,
              user.idealtype,
              user.smoke,
              user.openchatlink,
              user.hashtag,
              user.selfintro,
            );
            history.push(url);
          }}
        >
          <div className="MuiCardHeader-root">
            {`(${user.sex}) ${user.age}/${user.collage}`}
          </div>
          <CardContent style={{ 'padding-top': '6px' }}>
            <Badge keyword={user.hashtag.substring(0, 5)} color="primary" />
            <Badge keyword={user.collage.substring(0, 5)} color="rose" />
            <Badge keyword={user.religion.substring(0, 5)} color="warning" />
            <p className="body">{user.selfintro.substring(0, 60)}</p>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default inject(({ userlist }) => ({
  userList: userlist.userList,
  setTableData: userlist.setTableData,
  updated: userlist.updated,
  IsLoading: userlist.IsLoading,
}))(observer(SelfDatingList));
