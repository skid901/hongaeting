import React, { useState, useEffect, useContext } from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { inject, observer } from 'mobx-react';
import './SelfMeetingList.scss';
import { useHistory } from 'react-router-dom';

import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import ReactPaginate from 'react-paginate';
import Badge from 'component/06SelfDatingList/Badge';
import axios from '../../../node_modules/axios/index';

const useStyles1 = makeStyles({
  root: {
    width: 300,
    background: 'linear-gradient(45deg, #f06595 30%, #f06595 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px #F1F1F1',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});

const SelfMeetingList = ({
  updated,
  IsLoading,
  setUsers,
  pageNumber,
  pagedUser,
  setUserCount,
  userCount,
  gender,
  setGender,
}) => {
  const history = useHistory();
  const [searchKeyword, setSearchKeyword] = useState('');
  const classes1 = useStyles1();
  useEffect(() => {
    setGender(2);
    setUsers(1);
    //setUserCount();
    console.log(pagedUser);
  }, []);

  return (
    <div className="Template">
      <div className="secondbar">
        <ol className="viewlist">
          <li className="view">
            <Button
              style={(()=>{
                if(gender === 2){
                  return {'font-family': 'Do Hyeon, sans-serif', 'background-color': 'lightgray'};
                } else{
                  return {'font-family': 'Do Hyeon, sans-serif'};
                }
              })()}
              onClick={() => {
                setGender(2);
                setUsers(1);
                //setUserCount();
              }}
            >
              전체보기
            </Button>
          </li>
          <li className="view">
            <Button
              style={(()=>{
                if(gender === 0){
                  return {'font-family': 'Do Hyeon, sans-serif', 'background-color': 'lightgray'};
                } else{
                  return {'font-family': 'Do Hyeon, sans-serif'};
                }
              })()}
              onClick={() => {
                setGender(0);
                setUsers(1);
                //setUserCount();
              }}
            >
              남학우
            </Button>
          </li>
          <li className="view">
            <Button
              style={(()=>{
                if(gender === 1){
                  return {'font-family': 'Do Hyeon, sans-serif', 'background-color': 'lightgray'};
                } else{
                  return {'font-family': 'Do Hyeon, sans-serif'};
                }
              })()}
              onClick={() => {
                setGender(1);
                setUsers(1);
                // setUserCount();
              }}
            >
              여학우
            </Button>
          </li>
        </ol>
      </div>
      <p className="title"></p>
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
          <TextField
            label="키워드를 검색하세요🔍"
            type="search"
            className="searchfield"
            margin="dense"
            variant="outlined"
            value={searchKeyword}
            onChange={e => setSearchKeyword(e.target.value)}
            autoComplete="off"
            fullWidth
          />
        </Container>
      </div>
      {IsLoading ? (
        <div style={{ 'text-align': 'center' }}>
          <div> 잠시만기다려주세요...</div>
          <div>
            <CircularProgress />
            {/* <CircularProgress color="secondary" /> */}
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
                          // item.collage.indexOf(searchKeyword) >= 0 ||
                          // item.religion.indexOf(searchKeyword) >= 0 ||
                          // item.personality.indexOf(searchKeyword) >= 0 ||
                          item.tag.indexOf(searchKeyword) >= 0,
                      )
                      .map(user => <Cards user={user} history={history} />)
                  : pagedUser.map(user => (
                      <Cards user={user} history={history} />
                    ));
              }
              console.log('result : ', result);
              return result;
            })()}
          </Container>
        </div>
      )}
      <div className="page" style={{ 'text-align': 'center' }}>
        {/* <ReactPaginate
          pageCount={parseInt(userCount / 20) + 1}
          marginPagesDisplayed={1}
          pageRangeDisplayed={1}
          onPageChange={e => setUsers(e.selected + 1)}
          previousLabel={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
              <path fill="none" d="M0 0h24v24H0V0z" />
            </svg>
          }
          breakLabel={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path fill="none" d="M0 0h24v24H0V0z" />
              <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
            </svg>
          }
          nextLabel={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
              <path fill="none" d="M0 0h24v24H0V0z" />
            </svg>
          } />*/}
      </div>
    </div>
  );
};

@inject(({ selfMeetingUser }) => ({
  setSelectedUser: selfMeetingUser.setSelectedUser,
}))
@observer
class Cards extends React.Component {
  render() {
    const { setSelectedUser, user, history } = this.props;
    const url = `/selfmeetingdetails/user`;
    return (
      <div className="CardsWrapper">
        <Card
          onClick={() => {
            setSelectedUser(user);
            history.push(url);
          }}
        >
          <div className="MuiCardHeader-root">
            {`${user.gender}` == '남학우' ? <p>🤵</p> : <p>👧</p>}
            {`(${user.number})${user.gender}/${user.nickname}`}
          </div>
          <CardContent style={{ 'padding-top': '6px' }}>
            {(() => {
              if (user.tag.toString().split('#')[1]) {
                return (
                  <Badge
                    keyword={user.tag.toString().split('#')[1]}
                    color="a"
                  />
                );
              }
            })()}
            {(() => {
              if (user.tag.toString().split('#')[2]) {
                return (
                  <Badge
                    keyword={user.tag.toString().split('#')[2]}
                    color="b"
                  />
                );
              }
            })()}
            {(() => {
              if (user.tag.toString().split('#')[3]) {
                return (
                  <Badge
                    keyword={user.tag.toString().split('#')[3]}
                    color="c"
                  />
                );
              }
            })()}
            {(() => {
              if (user.tag.toString().split('#')[4]) {
                return (
                  <Badge
                    keyword={user.tag.toString().split('#')[4]}
                    color="d"
                  />
                );
              }
            })()}
            {(() => {
              if (user.tag.toString().split('#')[5]) {
                return (
                  <Badge
                    keyword={user.tag.toString().split('#')[5]}
                    color="e"
                  />
                );
              }
            })()}
            <p
              className="body"
              style={{
                'font-size': '12px',
                'padding-top': '5px',
                color: '#545454',
              }}
            >
              {user.keysentence}
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default inject(({ selfMeetingUser }) => ({
  updated: selfMeetingUser.updated,
  IsLoading: selfMeetingUser.IsLoading,
  setUsers: selfMeetingUser.setUsers,
  pageNuber: selfMeetingUser.pageNumber,
  pagedUser: selfMeetingUser.pagedUser,
  setUserCount: selfMeetingUser.setUserCount,
  userCount: selfMeetingUser.userCount,
  gender: selfMeetingUser.gender,
  setGender: selfMeetingUser.setGender,
}))(observer(SelfMeetingList));
