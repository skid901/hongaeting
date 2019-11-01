import React from 'react';
import { styled } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import './SelfDatingChat.scss';

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

const useStyles = makeStyles({
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
  const classes = useStyles();
  const classes2 = useStyles2();
  const classes3 = useStyles3();
  return (
    <div>
      <div>SelfDatingChat will be here...</div>
      <div>
        <MyButton>Styled Components</MyButton>;
        <Button className={classes.root}>Hook</Button>
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
              <Button className={classes.root}>Button</Button>Conetens
            </CardContent>
          </Card>
        </div>
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
