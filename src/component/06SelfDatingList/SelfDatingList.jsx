import React, {useState, useEffect} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import './SelfDatingList.scss';
import Axios from '../../../node_modules/axios/index';

const SelfDatingList = () =>{
  const [datas, setdatas] = useState([
    {
      id:'0',
      name:'Demo',
      age:'Demo',
      nationality:'Demo',
      introduction: '',
      tag1:'Demo',
      tag2:'Demo',
      tag3:'Demo'
    }
  ])
  useEffect(()=>{
    useTableData();
  },[])

  const getTableData = async () => {
    try{
      return await Axios.get('https://spreadsheets.google.com/feeds/list/1xOsFfS4CuvEMxssqDOKlrxzXMW7jxiuH-49Pq9svGg4/1/public/full?alt=json');
    } catch (error){
      console.error(error);
    }
  }

  const useTableData = async() => {
    const TableDatas = await getTableData();
    const a = await TableDatas.data.feed.entry;
    const length = a.length;
    let tmplist=[];
    let tmp = {
      id: '0',
      name: 'Demo',
      age: 'Demo',
      nationality: 'Demo',
      introduction: 'Demo',
      tag1: 'Demo',
      tag2: 'Demo',
      tag3: 'Demo'
    };
    for(let i = 0; i < length ; i++){
      tmp.id = TableDatas.data.feed.entry[i].gsx$id.$t;
      tmp.name = TableDatas.data.feed.entry[i].gsx$name.$t;
      tmp.age = TableDatas.data.feed.entry[i].gsx$age.$t;
      tmp.nationality = TableDatas.data.feed.entry[i].gsx$nationality.$t;
      tmp.introduction = TableDatas.data.feed.entry[i].gsx$introduction.$t;
      tmp.tag1 = TableDatas.data.feed.entry[i].gsx$tag1.$t;
      tmp.tag2 = TableDatas.data.feed.entry[i].gsx$tag2.$t;
      tmp.tag3 = TableDatas.data.feed.entry[i].gsx$tag3.$t;
      tmplist.push({
        id : tmp.id,
        name: tmp.name,
        age: tmp.age,
        nationality: tmp.nationality,
        introduction: tmp.introduction,
        tag1: tmp.tag1,
        tag2: tmp.tag2,
        tag3: tmp.tag3,
      });
    }
    setdatas(tmplist);
  }

  return(
    <div className = "Template" >
      <div className="header">
        홍셀소
      </div>
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
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>나이</TableCell>
              <TableCell>소속</TableCell>
              <TableCell>키워드1</TableCell>
              <TableCell>키워드2</TableCell>
              <TableCell>키워드3</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {datas.map(data => (
              <TableRow key = {data.id} onClick={()=>console.log(data.introduction)}>
                <TableCell component="th" scope="row">
                  {data.id}
                </TableCell>
                <TableCell>{data.name}</TableCell>
                <TableCell>{data.age}</TableCell>
                <TableCell>{data.nationality}</TableCell>
                <TableCell>{data.tag1}</TableCell>
                <TableCell>{data.tag2}</TableCell>
                <TableCell>{data.tag3}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>

      
    </div>
  )  
}

export default SelfDatingList;
