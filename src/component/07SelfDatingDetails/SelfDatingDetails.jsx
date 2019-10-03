import React, { useState, useEffect } from 'react';
import './SelfDatingDetails.scss';

import Axios from '../../../node_modules/axios/index';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Paper from '@material-ui/core/Paper'
import CommentIcon from '@material-ui/icons/Comment';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Table from '@material-ui/core/Table';

const SelfDatingDetails = () =>{
  const [datas, setdatas] = useState([
    {
      id:'',
      name:'',
      email:'',
      age:'',
      sex:'',
      nationality:'',
      tag1:'',
      tag2:'',
      tag3:''
    }
  ])
  useEffect(()=>{
    useTableData();
  },[])

  const getTableData = async () => {
    try{  //what is the try?
      return await Axios.get('https://spreadsheets.google.com/feeds/list/1MJ6UiMywoga78H2EHQ70V0TP9I_v1dyx6VUCqUs6RCY/1/public/full?alt=json')
    } catch (error){
      console.error(error);
    }
  }
  
  
  const useTableData = async() => {
    const TableDatas = await getTableData();
    const row = await TableDatas.data.feed.entry;
    const length = row.length;
    let tmplist=[]; // what is the tmp?
    let tmp = {
      id:'0',
      name:'',
      email:'',
      age:'',
      sex:'',
      nationality:'',
      tag1:'',
      tag2:'',
      tag3:'',
      link:''
    };
    for(let i= 0; i<length; i++){
      tmp.id = TableDatas.data.feed.entry[i].gsx$id.$t;
      tmp.name = TableDatas.data.feed.entry[i].gsx$name.$t;
      tmp.age = TableDatas.data.feed.entry[i].gsx$age.$t;
      tmp.sex = TableDatas.data.feed.entry[i].gsx$sex.$t;
      tmp.email = TableDatas.data.feed.entry[i].gsx$email.$t;   
      tmp.nationality = TableDatas.data.feed.entry[i].gsx$nationality.$t;
      tmp.introduction = TableDatas.data.feed.entry[i].gsx$introduction.$t;
      tmp.tag1 = TableDatas.data.feed.entry[i].gsx$tag1.$t;
      tmp.tag2 = TableDatas.data.feed.entry[i].gsx$tag2.$t;
      tmp.tag3 = TableDatas.data.feed.entry[i].gsx$tag3.$t;
      tmp.link = TableDatas.data.feed.entry[i].gsx$link.$t;
      tmplist.push({
        id:tmp.id,
        name: tmp.name,
        age: tmp.age,
        sex: tmp.sex,
        email: tmp.email,
        nationality: tmp.nationality,
        introduction: tmp.introduction,
        tag1: tmp.tag1,
        tag2: tmp.tag2,
        tag3: tmp.tag3,
        link: tmp.link,
      });
    }
    setdatas(tmplist); 
  }

  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    Expansion: {
      width: '100%',
    },
    Expansionhead: {
      fontSize: theme.typography.pxToRem(18),
      fontWeight: theme.typography.fontWeightRegular,
    },
    root1: {
      width: '100%',
      maxWidth: 3000,
      backgroundColor: theme.palette.background.paper,
    },
    table: {
      minWidth: 100,
      maxWidth: 500
    },
  }));
  const classes = useStyles();

   console.log(datas[0])
   console.log(datas[0].email)
    return (
      <div>
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                  홍셀소
              </Typography>
              <Button color="inherit">Send</Button>
            </Toolbar>
          </AppBar>
        </div>
        <h1 className="imoji">😊</h1>
        <h1>({datas[0].id}) {datas[0].age} / {datas[0].sex}</h1>
        <Paper>
          <Table>
            <TableBody>    
              <TableRow>
                <TableCell variant="head"><CommentIcon /> 자기소개</TableCell>
                <TableCell> {datas[0].tag1}</TableCell>
              </TableRow>
              <TableRow>    
                <TableCell variant="head"><CommentIcon />링크</TableCell>
                <TableCell><a href={datas[0].link}>{datas[0].link}</a></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Paper>       
        <div className={classes.Expansion}>
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
            <Typography className={classes.Expansiobhead}>😊외모 </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>그의 외모는 = {datas[0].tag1}</Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
            <Typography className={classes.heading}>😊성격 </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>그의 성격은 = {datas[0].tag2}</Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel disabled>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
            <Typography className={classes.heading}>Disabled Expansion Panel</Typography>
            </ExpansionPanelSummary>
          </ExpansionPanel>
        </div>
      </div>
    )
  }
export default SelfDatingDetails;