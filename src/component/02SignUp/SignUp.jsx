import React, { useState } from 'react';
import './SignUp.scss';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const SignUp = () => {
  const [state, setState] = useState({
    id: '',
    password: '',
    showPassword: false,
  });
  const handleChange = key => event => {
    setState({ ...state, [key]: event.target.value });
  };
  const handleClickShowPassword = () => {
    setState({ ...state, showPassword: !state.showPassword });
  };
  const handleMouseDownPassword = event => {
    event.preventDefault();
  };
  const endAdornment = (
    <InputAdornment position="end">
      <IconButton
        aria-label="toggle password visibility"
        onClick={handleClickShowPassword}
        onMouseDown={handleMouseDownPassword}
      >
        {state.showPassword ? <Visibility /> : <VisibilityOff />}
      </IconButton>
    </InputAdornment>
  );
  return (
    <div className="SignUp">
      <div>
        <div>id: {state.id}</div>
        <div>pw: {state.password}</div>
        <div>show: {`${state.showPassword}`}</div>
      </div>
      <div>
        <TextField
          id="signUp-id"
          className="signUp-input"
          label="ID"
          placeholder="ID를 입력해주세요."
          margin="normal"
          value={state.id}
          onChange={handleChange('id')}
          required
        />
      </div>
      <div>
        <TextField
          id="signUp-password"
          className="signUp-input"
          type={state.showPassword ? 'text' : 'password'}
          label="Password"
          placeholder="Password를 입력해주세요."
          margin="normal"
          endAdornment={endAdornment}
          value={state.password}
          onChange={handleChange('password')}
          required
        />
      </div>
    </div>
  );
};

export default SignUp;
