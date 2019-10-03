import React, { Component } from 'react';
import './tabletop.scss';
import Tabletop from 'tabletop';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import User from './User'


class Sheet extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    Tabletop.init({
      key: '1MJ6UiMywoga78H2EHQ70V0TP9I_v1dyx6VUCqUs6RCY',
      callback: googleData => {
        this.setState({
          data: googleData,
        });
      },
      simpleSheet: true,
    });
  }

  render() {
    console.log('updated state--->', this.state);
    const { data } = this.state;
    return (
      <div>
        <div className="Head">
          <h1>😊여학우_셀소 </h1>
          <p>1.자기소개 검색이 가능해요.</p>
          <p>2.나이/성별 을 클릭하면 더 자세한 소개를 볼 수 있어요.</p>
          <p className="star">*개인정보 노출 최소화를 위해 단과대학은 올려드리지 않아요</p>
          <p>3. 검색 키워드 :  큰 키, 고양이상, 이목구비 뚜렷, 혼혈느낌, 귀여운, 동안, 쌍커풀, 예쁨, 다정, 외향, 리액션, 사교적, 배려심, 웃음기, 장난, 맛집탐방, 독서, 수영, 전시회, 한강</p>
        </div>
        <div className="Sheet">
          <header className="Sheet-header">
            <h1> Google Sheet automization</h1>
          </header>
          <div id="user-table">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>No</TableCell>
                  <TableCell>UserID</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Face</TableCell>
                  <TableCell>Characteristc</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map(obj=>{
                  return <User key={obj.email} no={obj.no} userid={obj.userid} email={obj.email} content1={obj.content1} content2={obj.content2} />
                })}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>

    );
  }
}

export default Sheet;

