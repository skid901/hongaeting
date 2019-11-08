import React from 'react';
import { useParams } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import './MyPage.scss';
import Badge from 'component/06SelfDatingList/Badge';

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

const userList = [
  {
    _id: '1',
    nickName: 'outwater',
    time: '2019-11-01T11:55:58.370Z',
    email: 'emailtest@naver.com',
    kakaoid: 'kakaoidor연락처',
    sex: '여학우',
    age: '26세',
    collage: '사범대학',
    appearance: '[외모]1:1소개팅만신청외모테스트',
    personality: '[성격]1:1소개팅만신청외모테스트',
    hobby: '[취미]1:1소개팅만신청외모테스트',
    religion: '기독교',
    smoke: '흡연자',
    idealtype: '[연애관]1:1소개팅만신청외모테스트',
    openchatlink: '',
    hashtag: '#귀요미 #깜찍이 #끔찍이',
    selfintro: '이성학우들에게한마디',
  },
  {
    _id: '2',
    nickName: 'inwater',
    time: '2019-11-01T11:19:53.024Z',
    email: 'kocon135@naver.com',
    kakaoid: 123,
    sex: '남학우',
    age: '26세',
    collage: '사범대학',
    appearance: 'k',
    personality: 'd',
    hobby: 'd',
    religion: '천주교',
    smoke: '비흡연자',
    idealtype: 'd',
    openchatlink: '',
    hashtag: '',
    selfintro: '',
  },
];
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
              <Badge keyword="tag1" color="primary" />
              <Badge keyword="tag2" color="primary" />
              <Badge keyword="tag3" color="primary" />
            </div>
            <div>
              <Badge
                keyword="자기소개 한마디 주르르르르를르르르르르르르륵"
                color="info"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="MenuName">
        <p className="MenuName"> 채팅방 리스트</p>
      </div>
      <div>
        <ul>
          {userList.map(val => (
            <ListItem
              alignItems="flex-start"
              key={val._id}
              className={classes.root}
            >
              <ListItemAvatar>
                <Avatar
                  className={classes.orangeAvatar}
                  style={{ 'font-size': '11px' }}
                >
                  1:1매칭
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={val.nickName}
                style={{ 'padding-top': '15px' }}
                secondary={
                                    <>
  <Typography
                                        component="span"
                      variant="body2"
                                        className={classes.inline}
                                        color="textPrimary"
                    />
  {/* {' — 대화내용이 여기에 나오게 하면 좋겠는데!!'} */}
</>
                }
              />
              <Button
                // type="button"
                data-email={val.email}
                style={{ 'margin-top': '15px' }}
              >
                클릭
              </Button>
              {/* <div className="timebar" style={{ 'font-size': '11px' }}>
                11월14일
              </div> */}
            </ListItem>
          ))}
        </ul>
      </div>
      {/* <div>
        <ul>
          {userList.map(val => (
            <li key={val._id}>
              {val.nickName}와 채팅하려면{' '}
              <button type="button" data-email={val.email}>
                클릭
              </button>
            </li>
          ))}
          <li />
        </ul>
      </div> */}
    </div>
  );
};

export default MyPage;
