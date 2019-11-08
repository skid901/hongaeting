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
    background: 'linear-gradient(45deg, #085F63 30%, #085F63 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px #F1F1F1',
    color: 'white',
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
      <p
        className="title"
        style={{
          'background-color': 'white',
          'font-family': 'Noto Sans KR, sans-serif',
        }}
      >
        홍익 셀프 소개팅
      </p>
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
              style={{ 'font-family': 'Noto Sans KR, sans-serif' }}
              onClick={() => {
                history.push('/introductionform');
              }}
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
                      <Cards
                        user={user}
                        history={history}
                        style={{ 'font-family': 'Noto Sans KR, sans-serif' }}
                      />
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
              user.personality,
              user.hobby,
              user.religion,
              user.smoke,
              user.idealtype,
              user.openchatlink,
              user.hashtag,
              user.selfintro,
            );
            history.push(url);
          }}
        >
          <div className="MuiCardHeader-root">
            {`${user.sex}` == '남학우' ? <p>🤵</p> : <p>👧</p>}
            {`(${user.sex}) ${user.age}/${user.collage}`}
          </div>
          <CardContent style={{ 'padding-top': '6px' }}>
            <Badge
              keyword={user.hashtag.toString().split('#')[1]}
              color="primary"
            />
            <Badge
              keyword={user.hashtag.toString().split('#')[2]}
              color="primary"
            />
            <Badge
              keyword={user.hashtag.toString().split('#')[3]}
              color="rose"
            />
            <Badge
              keyword={user.hashtag.toString().split('#')[4]}
              color="rose"
            />
            <Badge
              keyword={user.hashtag.toString().split('#')[5]}
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
              {user.selfintro.substring(0, 60)}
            </p>
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
