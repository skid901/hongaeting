/* eslint-disable prettier/prettier */
import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class User extends React.Component {
  render() {
    return (
      <TableRow>
        <TableCell>{this.props.no}</TableCell>
        <TableCell>{this.props.userid}</TableCell>
        <TableCell>{this.props.email}</TableCell>
        <TableCell>{this.props.content1}</TableCell>
        <TableCell>{this.props.content2}</TableCell>
      </TableRow>
    )
  }
}
export default User;
  
