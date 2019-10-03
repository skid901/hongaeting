/* eslint-disable react/prop-types */
import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const User = (props) => {
  return (
    <TableRow>
      <TableCell>{props.hash}</TableCell>
      <TableCell>{props.email}</TableCell>
      <TableCell><a href={props.link}>{props.link}</a></TableCell>
      <TableCell>{props.date}</TableCell>
      <TableCell>{props.content1}</TableCell>
      </TableRow>
   )
}
export default User;
  
