/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import CommentIcon from '@material-ui/icons/Comment';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 3000,
    backgroundColor: theme.palette.background.paper,
  },
  table: {
    minWidth: 100,
    maxWidth: 500
  },
  head:{
  
  }
}));

export default function CheckboxList(props){
  const classes = useStyles();

  return (
    <List className={classes.root}>
      
        <Table size="medium" key={''} className={classes.table}>
            {[0, 1, 2].map(value => {
          const labelId = `checkbox-list-label-${value}`;
          const label = ['자기소개','이메일주소','시간'];
          const inlabel = [props.hash,props.email,props.date]
          return (
          // eslint-disable-next-line react/jsx-key
          <TableBody>
            <TableCell variant="head" id={labelId}><CommentIcon /> {`${label[value]}`} </TableCell>
            <TableCell id={labelId}>{`${inlabel[value]}`} </TableCell>
          </TableBody>)})}
          <TableCell variant="head" className={classes.head}><CommentIcon />링크</TableCell>
          <TableCell><a href={props.link}>{props.link}</a></TableCell>
          </Table>
    </List>
  );
}