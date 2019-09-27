import React, { Component } from 'react';
import './SelfDatingDetails.scss';
import Tabletop from 'tabletop';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import User from './User'
import ButtonAppBar from'./ex';
import ExpansionBar from './ExtentionBar';

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
    console.dir(data)
    console.dir(data[0])
    console.log(data)
    console.log(data[0])
    console.log();
    return (
      <div>
        <div>
          <div>
            <ButtonAppBar />
          </div>
          <h1 className="imoji">😊</h1>
          <h1>(532)24/남학우(..HardCoding..ㅠ)</h1>
          <h1>밑부분 고장..</h1>
        </div>
        <div id="user-table">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Hash</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Link</TableCell>
                <TableCell>Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map(obj=>{
                  return <User key={obj.email} hash={`${obj.hash1} ${obj.hash2} ${obj.hash3}`} email={obj.email} link={obj.link} date={obj.date} />
                })}
            </TableBody>
          </Table>
        </div>    
        <div className="Sheet">
          <ExpansionBar name={data.map(obj=>{
                  return <User key={obj.content1} content1={obj.content1} content2={obj.content2} />
                })}
          />
        </div>
      </div>

    );
  }
}

export default Sheet;