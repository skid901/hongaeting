/* eslint-disable react/prop-types */
import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const User = (props) => {
  return (
    <TableRow>
      <TableCell>{props.info}</TableCell>
      <TableCell>{props.hash}</TableCell>
      <TableCell>{props.moreview}</TableCell>
    </TableRow>
  )
}
export default User;

