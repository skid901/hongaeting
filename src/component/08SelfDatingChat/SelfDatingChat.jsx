import React from 'react';
import { styled } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import './SelfDatingChat.scss';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import AccountCircle from '@material-ui/icons/AccountCircle';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

// import Header from '../material/appbar/Header.js';
// import styles from 'assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js';

const MyButton = styled(Button)({
  width: '100%',
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
});

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    // minHeight: 128,
    // alignItems: 'flex-start',
    // paddingTop: theme.spacing(1),
    // paddingBottom: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const useStyles1 = makeStyles({
  root: {
    width: 300,
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'black',
    height: 48,
    padding: '0 30px',
  },
});

const useStyles2 = makeStyles({
  root: {
    padding: 16,
    color: 'red',
    '& p': {
      color: 'green',
      '& span': {
        color: 'blue',
      },
    },
  },
});

const useStyles3 = makeStyles({
  root: {
    'padding-top': '10px',
  },
});
const SelfDatingChat = () => {
  const classes1 = useStyles1();
  const classes2 = useStyles2();
  const classes3 = useStyles3();
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h7">
              홍셀소
            </Typography>
            <Typography className={classes.title} variant="h7">
              홍미팅
            </Typography>
            <IconButton color="inherit">
              <AccountCircle />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>

      {/* <Header
        brand="Menu"
        color="primary"
        leftLinks={
          <List className={classes.list}>
            <ListItem className={classes.listItem}>
              <Button
                href="#pablo"
                className={classes.navLink}
                onClick={e => e.preventDefault()}
                color="transparent"
              >
                Link
              </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Button
                href="#pablo"
                className={classes.navLink}
                onClick={e => e.preventDefault()}
                color="transparent"
              >
                Link
              </Button>
            </ListItem>
          </List>
        }
      /> */}
      <div>SelfDatingChat will be here...1</div>
      <div>
        <MyButton>Styled Components</MyButton>;
        <Button
          className={classes1.root}
          style={{ 'font-family': 'Do Hyeon, sans-serif' }}
        >
          홍개팅 신청하기
        </Button>
        <div>
          <Button className={classes2.root}>
            <p>
              p-color<span>span-color</span>3333
            </p>
            original color nested
          </Button>
          <Card>
            Card
            <CardContent className={classes3.root}>
              <Button className={classes1.root}>Button</Button>Conetens
            </CardContent>
          </Card>
        </div>
      </div>
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
    </div>
  );
};

export default SelfDatingChat;

// const Cards = inject(({ userlist }) => ({
//   setSelectedUser: userlist.setSelectedUser,
// }))(
//   observer(SelfDatingList => {
//     const { setSelectedUser, user, history } = this.props;
//     const url = `/selfdatingdetails/${user.id.toString().split('(')[0]}`;
// const classes = useStyles();

// const Cards = () => {
//   const { setSelectedUser, user, history } = this.props;
//   const url = `/selfdatingdetails/${user.id.toString().split('(')[0]}`;
//   const classes3 = useStyles3();
//   return (
//     <div className="CardsWrapper">
//       <Card
//         onClick={() => {
//           setSelectedUser(
//             user.id.toString().split('(')[0],
//             user.time,
//             user.age,
//             user.collage,
//             user.kakaoid,
//             user.religion,
//             user.personality,
//             user.hobby,
//             user.idealtype,
//           );
//           history.push(url);
//         }}
//       >
//         {/* <CardHeader title={`(${user.id}) ${user.age}/${user.collage}`} /> */}
//         <div className="MuiCardHeader-root">
//           {`() ${user.age}/${user.collage}`}
//         </div>
//         <CardContent className={classes3.root}>
//           <Badge keyword={user.collage.substring(0, 5)} color="primary" />
//           <Badge keyword={user.collage.substring(0, 5)} color="rose" />
//           <Badge keyword={user.religion.substring(0, 5)} color="warning" />
//           {/* <Typography>
//         {user.religion.substring(0, 5)} {user.personality.substring(0, 5)}{' '}
//         {user.hobby.substring(0, 5)}
//       </Typography> */}
//           <p className="body">{user.idealtype.substring(0, 60)}</p>
//         </CardContent>
//         <CardActions>
//           {/* <Button
//         onClick={() => {
//           setSelectedUser(
//             user.id.toString().split('(')[0],
//             user.time,
//             user.age,
//             user.collage,
//             user.kakaoid,
//             user.religion,
//             user.personality,
//             user.hobby,
//             user.idealtype,
//           );
//           history.push(url);
//         }}
//       >
//         상세보기
//       </Button> */}
//         </CardActions>
//       </Card>
//     </div>
//   );
// };

// class Cards extends React.Component {
//   render() {
//     const { setSelectedUser, user, history } = this.props;
//     const url = `/selfdatingdetails/${user.id.toString().split('(')[0]}`;
//     const classes3 = useStyles3();
//     return (
//       <div className="CardsWrapper">
//         <Card
//           onClick={() => {
//             setSelectedUser(
//               user.id.toString().split('(')[0],
//               user.time,
//               user.age,
//               user.collage,
//               user.kakaoid,
//               user.religion,
//               user.personality,
//               user.hobby,
//               user.idealtype,
//             );
//             history.push(url);
//           }}
//         >
//           {/* <CardHeader title={`(${user.id}) ${user.age}/${user.collage}`} /> */}
//           <div className="MuiCardHeader-root">
//             {`() ${user.age}/${user.collage}`}
//           </div>
//           <CardContent className={classes3.root}>
//             <Badge keyword={user.collage.substring(0, 5)} color="primary" />
//             <Badge keyword={user.collage.substring(0, 5)} color="rose" />
//             <Badge keyword={user.religion.substring(0, 5)} color="warning" />
//             {/* <Typography>
//             {user.religion.substring(0, 5)} {user.personality.substring(0, 5)}{' '}
//             {user.hobby.substring(0, 5)}
//           </Typography> */}
//             <p className="body">{user.idealtype.substring(0, 60)}</p>
//           </CardContent>
//           <CardActions>
//             {/* <Button
//             onClick={() => {
//               setSelectedUser(
//                 user.id.toString().split('(')[0],
//                 user.time,
//                 user.age,
//                 user.collage,
//                 user.kakaoid,
//                 user.religion,
//                 user.personality,
//                 user.hobby,
//                 user.idealtype,
//               );
//               history.push(url);
//             }}
//           >
//             상세보기
//           </Button> */}
//           </CardActions>
//         </Card>
//       </div>
//     );
//   }
// }
