import React, { useState, useEffect } from 'react';
import './SelfDatingList.scss';
import Axios from '../../../node_modules/axios/index';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Paper from '@material-ui/core/Paper';
import MaterialTable from 'material-table';

const SelfDatingList = () => {
  const [columns, setColumns] = useState([
    { title: '키워드4', field: 'tag4' },
    { title: 'ID', field: 'id' },
    { title: '닉네임', field: 'name' },
    { title: '나이', field: 'age' },
    { title: '소속', field: 'nationality' },
    { title: '키워드1', field: 'tag1' },
    { title: '키워드2', field: 'tag2' },
    { title: '키워드3', field: 'tag3' },
  ]);

  const [datas, setdatas] = useState([
    {
      tag4: '',
      id: '011',
      name: '',
      email: '',
      age: '',
      nationality: '',
      tag1: '',
      tag2: '',
      tag3: '',
    },
  ]);
  useEffect(() => {
    useTableData();
  }, []);

  const getTableData = async () => {
    try {
      //what is the try?
      return await Axios.get(
        'https://spreadsheets.google.com/feeds/list/1MJ6UiMywoga78H2EHQ70V0TP9I_v1dyx6VUCqUs6RCY/1/public/full?alt=json',
      );
    } catch (error) {
      console.error(error);
    }
  };

  const useTableData = async () => {
    const TableDatas = await getTableData();
    const row = await TableDatas.data.feed.entry;
    const length = row.length;
    let tmplist = []; // what is the tmp?
    let tmp = {
      id: '0',
      name: '',
      email: '',
      age: '',
      nationality: '',
      tag1: '',
      tag2: '',
      tag3: '',
      tag4: '',
    };
    for (let i = 0; i < length; i++) {
      tmp.id = TableDatas.data.feed.entry[i].gsx$id.$t;
      tmp.name = TableDatas.data.feed.entry[i].gsx$name.$t;
      tmp.age = TableDatas.data.feed.entry[i].gsx$age.$t;
      tmp.nationality = TableDatas.data.feed.entry[i].gsx$nationality.$t;
      tmp.introduction = TableDatas.data.feed.entry[i].gsx$introduction.$t;
      tmp.tag1 = TableDatas.data.feed.entry[i].gsx$tag1.$t;
      tmp.tag2 = TableDatas.data.feed.entry[i].gsx$tag2.$t;
      tmp.tag3 = TableDatas.data.feed.entry[i].gsx$tag3.$t;
      tmplist.push({
        id: tmp.id,
        name: tmp.name,
        age: tmp.age,
        nationality: tmp.nationality,
        introduction: tmp.introduction,
        tag1: tmp.tag1,
        tag2: tmp.tag2,
        tag3: tmp.tag3,
        tag4: `(${tmp.id})${tmp.age}/${tmp.name}`,
      });
    }
    setdatas(tmplist);
  };

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
  }));
  const classes = useStyles();

  console.log(datas[0].id);
  return (
    <div>
      <div className="Head">
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                홍셀소
              </Typography>
              <Button color="inherit">Send</Button>
            </Toolbar>
          </AppBar>
        </div>
        <h1 className="imoji">&nbsp;😊남학우_셀소</h1>
        <p>&nbsp; 1.자기소개 검색이 가능해요.</p>
        <p>&nbsp; 2.나이/성별을 클릭하면 더 자세한 소개를 볼 수 있어요.</p>
        <p className="star">
          &nbsp;*개인정보 노출 최소화를 위해 단과대학은 올려드리지 않아요
        </p>
        <p>
          &nbsp; 3. 검색 키워드 : 큰 키, 고양이상, 이목구비 뚜y렷, 혼혈느낌,
          귀여운, 동안, 쌍커풀, 예쁨, 다정, 외향, 리액션, 사교적, 배려심,
          웃음기, 장난, 맛집탐방, 독서, 수영, 전시회, 한강
        </p>
      </div>
      <Paper>
        <MaterialTable
          title="셀소"
          columns={columns}
          data={datas}
          options={{
            Editable: false,
          }}
        />
      </Paper>
      {/* <div id="user-table">
          <Table>
            <TableHead>
// // // //              <TableRow>
// // // //                <TableCell>나이/성별</TableCell>
// // // //                <TableCell>자기소개</TableCell>
// // // //              </TableRow>
// // // //            </TableHead>
// // // //            <TableBody>
// // // //              {datas.map(obj=>{
// // // //                  return <User key={obj.email} hash={`${obj.tag1} ${obj.tag2} ${obj.tag3}`}  info={obj.sex} />
// // // //                })}
// // // //            </TableBody>
// // // //          </Table>
// // // //        </div> */}
    </div>
  );
};
export default SelfDatingList;
