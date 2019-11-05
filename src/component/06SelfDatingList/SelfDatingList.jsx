import React, { useState, useEffect, useContext } from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
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
import TextField from '@material-ui/core/TextField';
import Badge from './Badge';
import Axios from '../../../node_modules/axios/index';

const useStyles1 = makeStyles({
  root: {
    width: 300,
    background: 'linear-gradient(45deg, #1e3c72 30%, #2a5298 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});

const SelfDatingList = ({ updated, IsLoading, getUsers, pageNumber, pagedUser, getAllUsers, userCount }) => {
  const history = useHistory();
  const [searchKeyword, setSearchKeyword] = useState('');
  // const [IsLoading, setIsLoading] = useState(false);
  const classes1 = useStyles1();
  useEffect(() => {
    // setTableData();
    // console.log(searchKeyword === false);
    // console.log(updated);
    // console.log(IsLoading);
    getUsers(1);
    console.log(pagedUser);
    getAllUsers();
  }, [IsLoading]);

  return (
    <div className="Template">
      <p className="title" style={{ 'background-color': 'white' }}>
        홍익 셀프 소개팅😎
      </p>
      <div className="input" maxWidth="sm" style={{ 'padding-bottom': '0px' }}>
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
              셀프 소개팅 신청하기
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
                  ? pagedUser
                      .filter(
                        item =>
                          item.collage.indexOf(searchKeyword) >= 0 ||
                          item.religion.indexOf(searchKeyword) >= 0 ||
                          item.personality.indexOf(searchKeyword) >= 0 ||
                          item.hobby.indexOf(searchKeyword) >= 0,
                      )
                      .map(user => <Cards user={user} history={history} />)
                  : pagedUser.map(user => (
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

@inject(({ selfDatingUser }) => ({
  setSelectedUser: selfDatingUser.setSelectedUser,
}))
@observer
class Cards extends React.Component {
  render() {
    const { setSelectedUser, user, history } = this.props;
    const url = `/selfdatingdetails/${user.kakaoid}`;
    return (
      <div className="CardsWrapper">
        <Card
          onClick={() => {
            setSelectedUser(
              user
            );
            history.push(url);
          }}
        >
          <div className="MuiCardHeader-root">
            {`${user.gender}` == '남학우' ? <p>🤵</p> : <p>👧</p>}
            {`(${user.id}) ${user.age}/${user.collage}`}
          </div>
          <CardContent style={{ 'padding-top': '6px' }}>
            <Badge
              keyword={user.tag.toString().split('#')[1]}
              color="primary"
            />
            <Badge
              keyword={user.tag.toString().split('#')[2]}
              color="primary"
            />
            <Badge
              keyword={user.tag.toString().split('#')[3]}
              color="rose"
            />
            <Badge
              keyword={user.tag.toString().split('#')[4]}
              color="rose"
            />
            <Badge
              keyword={user.tag.toString().split('#')[5]}
              color="success"
            />
            <p
              className="timebar"
              style={{ float: 'right', 'text-align': 'right' }}
            >
              {`${user.time
                .toString()
                .substring(5, 7)}월${user.time.toString().substring(8, 10)}일`}
            </p>
            <p
              className="body"
              style={{ 'font-size': '14px', 'padding-top': '5px' }}
            >
              {user.keysentence.substring(0, 60)}
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default inject(({ selfDatingUser }) => ({
  updated: selfDatingUser.updated,
  IsLoading: selfDatingUser.IsLoading,
  getUsers: selfDatingUser.getUsers,
  pageNumber: selfDatingUser.pageNumber,
  pagedUser: selfDatingUser.pagedUser,
  getAllUsers: selfDatingUser.getAllUsers,
  userCount: selfDatingUser.userCount,
}))(observer(SelfDatingList));
