import React, {useState, useEffect} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import MaterialTable from 'material-table';
import menu from './menu.png'
import send from './send.png'

import './SelfDatingList.scss';
import Axios from '../../../node_modules/axios/index';

const SelfDatingList = () =>{
  const [columns, setColumns] = useState([
    {title : 'ID', field : 'id', 
      cellStyle:{width : 1},
      headerStyle: {width: 5}},
    {title : '나이', field : 'age'},
    {title : '소속', field : 'nationality'},
    {title : '키워드1', field : 'tag1'},
    {title : '키워드2', field : 'tag2'},
    {title : '키워드3', field : 'tag3'},
  ])
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

  //const [introduction, setIntroduction] = useState("");

  const getTableData = async () => {
    try{
      return await Axios.get('https://script.google.com/macros/s/AKfycbxvVR6OGNTJoHYz6KMpohrxN1opekMAPVOQfEhPR1Pgxs67C_g/exec');
    } catch (error){
      console.error(error);
    }
  }

  const useTableData = async() => {
    const TableDatas = await getTableData();
    const a = await TableDatas.data.user;
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
      tmp.id = TableDatas.data.user[i].id;
      tmp.name = TableDatas.data.user[i].name;
      tmp.age = TableDatas.data.user[i].age;
      tmp.nationality = TableDatas.data.user[i].nationality;
      tmp.introduction = TableDatas.data.user[i].introduction;
      tmp.tag1 = TableDatas.data.user[i].tag1;
      tmp.tag2 = TableDatas.data.user[i].tag2;
      tmp.tag3 = TableDatas.data.user[i].tag3;
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

  const a = (p) => {
    const x = "http://localhost:3000/selfdatingdetails/" + p.data.id;
    console.log(p.data);
    return (<a href={x} >상세보기</a>)
  }

  return(
    <div className = "Template" sytle={"width : 720px", "margin : 0 auto"}>
      <div className="header">
        <img src={menu} alt="" className = "Menu" />
        <div className = "Title">홍셀소</div>
        <img src={send} alt="" className = "Send" />
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
        <MaterialTable
          title="셀소"
          columns={columns}
          data={datas}
          options={{
            Editable : false
          }}
          // onRowClick={(e,a)=>{
          //   setIntroduction(a.introduction);
          //}}
          actions={[
            {
              icon: 'more',
              tooltip: '상세보기!',
              onClick: (event, rowData) => alert("You saved " + rowData.name)
            }
          ]} 
          options={{
            actionsColumnIndex: -1
          }}
          components={{
            Action: a
          }}
        />
      </Paper>
      {/* <div className="Introduction">
        {introduction}
      </div> */}
    </div>
  )  
}

export default SelfDatingList;
