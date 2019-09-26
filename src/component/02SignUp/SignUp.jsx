import React, { useState } from 'react';
import axios from 'axios';
import './SignUp.scss';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const SignUp = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
    showPassword: false,
    passwordConfirm: '',
    showPasswordConfirm: false,
    nickName: '',
    sex: 'femail',
    authEmail: '',
  });
  const handleChange = key => event => {
    setState({ ...state, [key]: event.target.value });
  };
  const endAdornment = key => (
    <InputAdornment position="end">
      <IconButton
        aria-label="toggle password visibility"
        onClick={() => {
          setState({ ...state, [key]: !state[key] });
        }}
        onMouseDown={event => {
          event.preventDefault();
        }}
      >
        {state[key] ? <Visibility /> : <VisibilityOff />}
      </IconButton>
    </InputAdornment>
  );
  const handleClick = event => {
    event.preventDefault();
    axios
      .post('api/users/mail', {
        certification: 'tlrudejr1993@mail.hongik.ac.kr',
        // certification: 'tlrudejr1993@gmail.com',
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <div className="signUp">
      <div className="signUp-title">회원가입</div>
      <Container className="signUp-input">
        <FormControl fullWidth>
          <InputLabel htmlFor="id">이메일</InputLabel>
          <Input
            id="signUp-email"
            placeholder="이메일을 입력해주세요."
            value={state.email}
            onChange={handleChange('email')}
          />
          <FormHelperText>자주 사용하는 이메일을 입력해주세요.</FormHelperText>
        </FormControl>
      </Container>
      <Container className="signUp-input">
        <FormControl fullWidth>
          <InputLabel htmlFor="password">패스워드</InputLabel>
          <Input
            id="signUp-password"
            placeholder="패스워드를 입력해주세요."
            type={state.showPassword ? 'text' : 'password'}
            value={state.password}
            onChange={handleChange('password')}
            endAdornment={endAdornment('showPassword')}
          />
          <FormHelperText>
            영문, 숫자 및 특수문자를 사용해 7-15자로 입력해주세요.
          </FormHelperText>
        </FormControl>
      </Container>
      <Container className="signUp-input">
        <FormControl fullWidth>
          <InputLabel htmlFor="passwordConfirm">패스워드 확인</InputLabel>
          <Input
            id="signUp-passwordConfirm"
            placeholder="패스워드를 확인해주세요."
            type={state.showPasswordConfirm ? 'text' : 'password'}
            value={state.passwordConfirm}
            onChange={handleChange('passwordConfirm')}
            endAdornment={endAdornment('showPasswordConfirm')}
          />
          <FormHelperText>패스워드와 동일하게 입력해주세요.</FormHelperText>
        </FormControl>
      </Container>
      <Container className="signUp-input">
        <FormControl fullWidth>
          <InputLabel htmlFor="nickName">닉네임</InputLabel>
          <Input
            id="signUp-nickName"
            placeholder="닉네임을 입력해주세요."
            value={state.nickName}
            onChange={handleChange('nickName')}
          />
          <FormHelperText>
            홍게팅에서 사용할 닉네임을 입력해주세요.
          </FormHelperText>
        </FormControl>
      </Container>
      <Container className="signUp-input">
        <FormControl component="fieldset" fullWidth>
          <FormLabel component="legend">성별</FormLabel>
          <RadioGroup
            id="signUp-sex"
            aria-label="sex"
            name="sex"
            value={state.gender}
            onChange={handleChange('sex')}
            row
          >
            <FormControlLabel
              value="female"
              control={<Radio color="primary" />}
              labelPlacement="end"
              label="여성"
            />
            <FormControlLabel
              value="male"
              control={<Radio color="primary" />}
              labelPlacement="end"
              label="남성"
            />
          </RadioGroup>
        </FormControl>
      </Container>
      <Container className="signUp-input">
        <FormControl fullWidth>
          <InputLabel htmlFor="authEmail">홍대 이메일 계정</InputLabel>
          <Input
            id="signUp-authEmail"
            placeholder="홍대 이메일 계정을 입력해주세요."
            value={state.authEmail}
            onChange={handleChange('authEmail')}
            endAdornment={
              <InputAdornment position="end">@mail.hongik.ac.kr</InputAdornment>
            }
          />
          <FormHelperText>
            홍대생인지 확인하기 위해 &quot;홍익대학교&quot; 이메일 계정만&nbsp;
            입력해주세요.
          </FormHelperText>
        </FormControl>
      </Container>
      <div className="signUp-notice">
        홍익대학교 이메일이 없으신가요?
        <br />
        아직 홍익대학교 이메일이 없거나 기억나지 않는다면,&nbsp;
        <Button
          href="http://it.hongik.ac.kr/dept/it/0204.html"
          target="_blank"
          color="primary"
        >
          이 곳
        </Button>
        으로 들어가 &quot;Office365 가입하기&quot;를 눌러주세요.
        <br /> 비밀번호가 기억나지 않는다면,&nbsp;
        <Button
          href="http://it.hongik.ac.kr/dept/it/o365_pw_reset.html"
          target="_blank"
          color="primary"
        >
          이 곳
        </Button>
        을 참고해주세요.
      </div>
      <Container className="signUp-input">
        <Button
          id="signUp-request"
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleClick}
        >
          회원가입
        </Button>
      </Container>
    </div>
  );
};

export default SignUp;
