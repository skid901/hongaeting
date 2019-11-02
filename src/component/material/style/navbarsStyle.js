// import { container, title } from 'assets/jss/material-kit-react.js';
// import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const navbarsStyle = theme => ({
  section: {
    padding: '70px 0',
    paddingTop: '0',
  },
  container: {
    ...conatinerFluid,
    '@media (min-width: 576px)': {
      maxWidth: '540px',
    },
    '@media (min-width: 768px)': {
      maxWidth: '720px',
    },
    '@media (min-width: 992px)': {
      maxWidth: '960px',
    },
    '@media (min-width: 1200px)': {
      maxWidth: '1140px',
    },
  },
  title: {
    color: '#3C4858',
    margin: '1.75rem 0 0.875rem',
    fontWeight: '700',
    fontFamily: `"Roboto Slab", "Times New Roman", serif`,
    marginTop: '30px',
    minHeight: '32px',
    textDecoration: 'none',
  },
  navbar: {
    marginBottom: '-20px',
    zIndex: '100',
    position: 'relative',
    overflow: 'hidden',
    '& header': {
      borderRadius: '0',
    },
  },
  navigation: {
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    marginTop: '0',
    minHeight: '740px',
  },
  formControl: {
    margin: '0 !important',
    paddingTop: '0',
  },
  inputRootCustomClasses: {
    margin: '0!important',
  },
  searchIcon: {
    width: '20px',
    height: '20px',
    color: 'inherit',
  },
  // ...headerLinksStyle(theme),
  // img: {
  //   width: "40px",
  //   height: "40px",
  //   borderRadius: "50%"
  // },
  // imageDropdownButton: {
  //   padding: "0px",
  //   top: "4px",
  //   borderRadius: "50%",
  //   marginLeft: "5px"
  // }
});

export default navbarsStyle;
