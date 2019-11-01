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

const useStyles = makeStyles(theme => ({
  progress: {
    margin: theme.spacing(2),
  },
  card: {
    padding: '20px',
  },
  cards: {},
  cardactions: {
    alignContent: 'right',
  },
}));

const SelfDatingList = ({ userList, setTableData, updated, IsLoading }) => {
  const history = useHistory();
  const [searchKeyword, setSearchKeyword] = useState('');
  // const [IsLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTableData();
    console.log(searchKeyword === false);
    console.log(updated);
    console.log(IsLoading);
  }, [IsLoading]);

  return (
    <div className="Template">
      <p className="title">홍익 셀프 소개팅😎 </p>
      <div className="input" maxWidth="sm">
        <div>
          {/* <p style={{ 'text-align': 'center' }}>잠시만기다려주세요...</p>
          <div>
            <CircularProgress />
            <CircularProgress color="secondary" />
          </div> */}
        </div>
        <SplitButton />
        <Container className="input" maxWidth="sm">
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
          {/* <CardHeader title={`(${user.id}) ${user.age}/${user.collage}`} /> */}
          <div className="MuiCardHeader-root">
            {`(${user.sex}) ${user.age}/${user.collage}`}
          </div>
          <CardContent style={{ 'padding-top': '6px' }}>
            <Badge keyword={user.hashtag.substring(0, 5)} color="primary" />
            <Badge keyword={user.collage.substring(0, 5)} color="rose" />
            <Badge keyword={user.religion.substring(0, 5)} color="warning" />
            {/* <Typography>
            {user.religion.substring(0, 5)} {user.personality.substring(0, 5)}{' '}
            {user.hobby.substring(0, 5)}
          </Typography> */}
            <p className="body">{user.selfintro.substring(0, 60)}</p>
          </CardContent>
          <CardActions>
            {/* <Button
            onClick={() => {
              setSelectedUser(
                user.id.toString().split('(')[0],
                user.time,
                user.age,
                user.collage,
                user.kakaoid,
                user.religion,
                user.personality,
                user.hobby,
                user.idealtype,
              );
              history.push(url);
            }}
          >
            상세보기
          </Button> */}
          </CardActions>
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
