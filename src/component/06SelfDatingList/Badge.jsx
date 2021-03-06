import React from 'react';
// nodejs library to set properties for components
import PropTypes from 'prop-types';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

const primaryColor = '#9c27b0';
const a = '#ffccd1';
const b = '#cce7e1';
const c = '#fbeecc';
const d = '#e1d3f8';
const e = 'rgba(140, 46, 0, 0.2)';
const warningColor = '#ff9800';
const dangerColor = '#f44336';
const successColor = '#4caf50';
const infoColor = '#00acc1';
const roseColor = '#e91e63';
const grayColor = '#999999';

const styles = {
  badge: {
    marginRight: '3px',
    borderRadius: '12px',
    padding: '5px 12px',
    textTransform: 'uppercase',
    fontSize: '11px',
    fontWeight: '500',
    lineHeight: '1',
    color: 'black',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    verticalAlign: 'baseline',
    display: 'inline-block',
  },
  a: {
    backgroundColor: a,
  },
  b: {
    backgroundColor: b,
  },
  c: {
    backgroundColor: c,
  },
  d: {
    backgroundColor: d,
  },
  e: {
    backgroundColor: e,
  },
  primary: {
    backgroundColor: primaryColor,
  },
  warning: {
    backgroundColor: warningColor,
  },
  danger: {
    backgroundColor: dangerColor,
  },
  success: {
    backgroundColor: successColor,
  },
  info: {
    backgroundColor: infoColor,
  },
  rose: {
    backgroundColor: roseColor,
  },
  gray: {
    backgroundColor: '#6c757d',
  },
};

const useStyles = makeStyles(styles);

export default function Badge(props) {
  const classes = useStyles();
  const { color, keyword, children } = props;
  return (
    <span className={`${classes.badge} ${classes[color]}`}>{keyword}</span>
  );
}

Badge.defaultProps = {
  color: 'gray',
};

Badge.propTypes = {
  color: PropTypes.oneOf([
    'a',
    'b',
    'c',
    'd',
    'e',
    'primary',
    'warning',
    'danger',
    'success',
    'info',
    'rose',
    'gray',
  ]),
  children: PropTypes.node,
};
