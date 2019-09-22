import React, { useState } from 'react';
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
    id: '',
    password: '',
    showPassword: false,
    passwordConfirm: '',
    showPasswordConfirm: false,
    gender: '0',
    email: '',
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
    alert('test');
  };
  return (
    <div className="SignUp">
      <Container className="signUp-input">
        <Paper>
          <Typography variant="h5" component="h3" color="primary">
            회원가입
          </Typography>
        </Paper>
      </Container>
      <Container className="signUp-input">
        <FormControl fullWidth>
          <InputLabel htmlFor="id">아이디</InputLabel>
          <Input
            id="signUp-id"
            placeholder="아이드를 입력해주세요."
            value={state.id}
            onChange={handleChange('id')}
          />
          <FormHelperText>영문 및 숫자만 사용할 수 있어요.</FormHelperText>
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
        <FormControl component="fieldset" fullWidth>
          <FormLabel component="legend">성별</FormLabel>
          <RadioGroup
            id="signUp-gender"
            aria-label="gender"
            name="gender"
            value={state.gender}
            onChange={handleChange('gender')}
            row
          >
            <FormControlLabel
              value="0"
              control={<Radio color="primary" />}
              labelPlacement="end"
              label="여성"
            />
            <FormControlLabel
              value="1"
              control={<Radio color="primary" />}
              labelPlacement="end"
              label="남성"
            />
          </RadioGroup>
        </FormControl>
      </Container>
      <Container className="signUp-input">
        <FormControl fullWidth>
          <InputLabel htmlFor="email">이메일</InputLabel>
          <Input
            id="signUp-email"
            placeholder="이메일을 입력해주세요."
            value={state.email}
            onChange={handleChange('email')}
            endAdornment={
              <InputAdornment position="end">@mail.hongik.ac.kr</InputAdornment>
            }
          />
          <FormHelperText>
            홍대생인지 확인하기 위해 홍익대학교 이메일만 입력해주세요.
          </FormHelperText>
        </FormControl>
      </Container>
      <Container className="signUp-input">
        <Paper>
          <Typography variant="h6" component="h3">
            홍익대학교 이메일이 없으신가요?
          </Typography>
          <Typography component="p">
            아직 홍익대학교 이메일이 없거나 기억나지 않는다면,&nbsp;
            <Button
              href="http://it.hongik.ac.kr/dept/it/0204.html"
              target="_blank"
              color="primary"
            >
              이 곳
            </Button>
            으로 들어가 &apos;Office365 가입하기&apos;를 눌러주세요.
          </Typography>
          <Typography component="p">
            비밀번호가 기억나지 않는다면,&nbsp;
            <Button
              href="http://it.hongik.ac.kr/dept/it/o365_pw_reset.html"
              target="_blank"
              color="primary"
            >
              이 곳
            </Button>
            을 참고해주세요.
          </Typography>
        </Paper>
      </Container>
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
