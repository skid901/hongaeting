import React, {useState, useEffect, useContext} from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import { inject, observer } from 'mobx-react';

import './SelfDatingList.scss';
import Axios from '../../../node_modules/axios/index';

import selfdatingdetails from '../07SelfDatingDetails/SelfDatingDetails';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles({
  cards: {

  },

  cardactions:{
    alignContent: 'right',
  }
})

const SelfDatingList = ({userList, setTableData, updated, history}) =>{
  const [searchKeyword, setSearchKeyword] = useState('');

  useEffect( () => {
    setTableData();
    console.log(searchKeyword==false);
  }, [])
  return(
    <div className = "Template" sytle={"width : 720px", "margin : 0 auto"} >
      <div className="pagename">
        <div className="pagename1">
          홍익 셀프 소개팅
        </div>
        <div className="pagename2">
          여러 학우들과의 대화와 만남
        </div>
        <button
          className="apply"
        >
          홍셀소 신청하기
        </button>
      </div>
      <div className="body">
        <div>
          남학우_셀소
        </div>
        <div>
          1.<br/>
          2.<br/>
          3.<br/>
        </div>
      </div> 
      <input 
        value={searchKeyword}
        onChange={(e)=>setSearchKeyword(e.target.value)}
      />
      <div className="CardsWrapper">
        {updated ? (searchKeyword ? (userList.filter((item)=>{
          return (item.religion.indexOf(searchKeyword)>=0) || 
            (item.personality.indexOf(searchKeyword)>=0) || 
            (item.hobby.indexOf(searchKeyword)>=0)
        }).map((user) => {
          return (<Cards
            id={user.id}
            time={user.time}
            kakaoid={user.kakaoid}
            age={user.age}
            collage={user.collage}
            religion={user.religion}
            personality={user.personality}
            hobby={user.hobby}
            idealtype={user.idealtype}
            history={history}
          />)
        })): userList.map((user) => {
          return (<Cards
            id={user.id}
            time={user.time}
            kakaoid={user.kakaoid}
            age={user.age}
            collage={user.collage}
            religion={user.religion}
            personality={user.personality}
            hobby={user.hobby}
            idealtype={user.idealtype}
            history={history}
          />)
        })): (<div value="a"/>)}
      </div>
    </div>
  )  
}

@inject(({userlist}) => ({
  setSelectedUser: userlist.setSelectedUser
}))
@observer
class Cards extends React.Component{
  render() {
    const {setSelectedUser} =this.props;
    const url = "/selfdatingdetails/" + this.props.id.toString().split('(')[0];
    return (
      <Card>
        <CardHeader
          title={this.props.id}
          subheader={this.props.age + '/' + this.props.collage}
        />
        <CardContent>
          <Typography>
            이 분의 핵심 키워드는 다음과 같습니다.
            </Typography>
          <Typography>
            {this.props.religion.substring(0, 5)}    {this.props.personality.substring(0, 5)} {this.props.hobby.substring(0, 5)}
          </Typography>
          <Typography>
            직접 작성하신 한 줄 소개입니다.
            </Typography>
          <Typography>
            {this.props.idealtype.substring(0, 40)}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={()=>{
              setSelectedUser(
                this.props.id.toString().split('(')[0],
                this.props.time,
                this.props.age,
                this.props.collage,
                this.props.kakaoid,
                this.props.religion,
                this.props.personality,
                this.props.hobby,
                this.props.idealtype
                )
              this.props.history.push(url);
            }}
          >상세보기</Button>
        </CardActions>
      </Card>
    )
  }
}

export default inject(({userlist}) => ({
  userList : userlist.userList,
  setTableData : userlist.setTableData,
  updated : userlist.updated
}))(observer(SelfDatingList));
