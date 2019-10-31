import React, { useState, useEffect, useContext } from 'react';
import ReactPaginate from 'react-paginate';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

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

import selfdatingdetails from '../07SelfDatingDetails/SelfDatingDetails';
import Axios from '../../../node_modules/axios/index';

const useStyles = makeStyles({
  cards: {},

  cardactions: {
    alignContent: 'right',
  },
});

const SelfDatingList = ({ userList, setTableData, updated, getUsers}) => {
  const history = useHistory();
  const [searchKeyword, setSearchKeyword] = useState('');
  useEffect(() => {
    setTableData();
    console.log(searchKeyword === false);
  }, []);
  return (
    <div className="Template" sytle={('width : 720px', 'margin : 0 auto')}>
      <div className="pagename">
        <div className="pagename1">홍익 셀프 소개팅</div>
        <div className="pagename2">여러 학우들과의 대화와 만남</div>
        <button className="apply" type="button" onClick={()=>getUsers()}>
          홍셀소 신청하기
        </button>
      </div>
      <div className="body">
        <div>
          남학우_셀소
        </div>
        <div>
          1.
          <br />
          2.
          <br />
          3.
          <br />
        </div>
      </div>
      <input
        value={searchKeyword}
        onChange={e => setSearchKeyword(e.target.value)}
      />
      <div className="CardsWrapper">
        {(() => {
          let result = null;
          if (updated) {
            result = searchKeyword
              ? userList
                  .filter(
                    item =>
                      item.religion.indexOf(searchKeyword) >= 0 ||
                      item.personality.indexOf(searchKeyword) >= 0 ||
                      item.hobby.indexOf(searchKeyword) >= 0,
                  )
                  .map(user => <Cards user={user} history={history} />)
              : userList.map(user => <Cards user={user} history={history} />);
          }
          return result;
        })()}
      </div>
      <div className="page">
        <ReactPaginate
          pageCount={10}
          marginPagesDisplayed={2}
          pageRangeDisplayed={1}
        />
      </div>
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
    const url = `/selfdatingdetails/${user.id.toString().split('(')[0]}`;
    return (
      <Card>
        <CardHeader title={user.id} subheader={`${user.age}/${user.collage}`} />
        <CardContent>
          <Typography>이 분의 핵심 키워드는 다음과 같습니다.</Typography>
          <Typography>
            {user.religion.substring(0, 5)} {user.personality.substring(0, 5)}{' '}
            {user.hobby.substring(0, 5)}
          </Typography>
          <Typography>직접 작성하신 한 줄 소개입니다.</Typography>
          <Typography>{user.idealtype.substring(0, 40)}</Typography>
        </CardContent>
        <CardActions>
          <Button
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
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default inject(({ userlist, selfDatingUser }) => ({
  userList: userlist.userList,
  setTableData: userlist.setTableData,
  updated: userlist.updated,
  getUsers: selfDatingUser.getUsers,
}))(observer(SelfDatingList));
