import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { observer, MobXProviderContext } from 'mobx-react';
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
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const SignUp = observer(() => {
  //
  const history = useHistory();

  const { alert } = useContext(MobXProviderContext);

  const [state, setState] = useState({
    email: '',
    password: '',
    showPassword: false,
    passwordConfirm: '',
    showPasswordConfirm: false,
    nickName: '',
    sex: 'female',
    authEmail: '',
    checked: false,
  });

  const handleChange = key => event => {
    setState({ ...state, [key]: event.target.value });
  };

  const handleAlert = (_title, _message) => {
    alert.setIsOpen(true);
    alert.setTitle(`${_title}`);
    alert.setMessage(`${_message}`);
  };

  const handleClick = async event => {
    event.preventDefault();

    // 미입력 검사
    if (state.email === '') {
      handleAlert(`이메일 미입력`, `이메일을 입력해주세요.`);
      return;
    }
    if (state.password === '') {
      handleAlert(`패스워드 미입력`, `패스워드를 입력해주세요.`);
      return;
    }
    if (state.passwordConfirm === '') {
      handleAlert(`패스워드 확인 미입력`, `패스워드 확인을 입력해주세요.`);
      return;
    }
    if (state.nickName === '') {
      handleAlert(`닉네임 미입력`, `닉네임을 입력해주세요.`);
      return;
    }
    if (state.authEmail === '') {
      handleAlert(`홍대 이메일 미입력`, `홍대 이메일 아이디를 입력해주세요.`);
      return;
    }

    // 유효성 검사
    if (
      !/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i.test(
        state.email,
      )
    ) {
      handleAlert(
        `이메일 재확인`,
        `이메일을 형식에 맞게 입력했는지 확인해주세요.`,
      );
      return;
    }
    if (
      !/^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/.test(
        state.password,
      )
    ) {
      handleAlert(
        `패스워드 재확인`,
        `패스워드를 형식에 맞게 입력했는지 확인해주세요.`,
      );
      return;
    }
    if (state.password !== state.passwordConfirm) {
      handleAlert(
        `패스워드 확인 미일치`,
        `패스워드와 패스워드 확인을 같게 입력했는지 확인해주세요.`,
      );
      return;
    }
    if (!/^[\w\W0-9a-zA-Zㄱ-ㅎㅏ-ㅣ가-힣]{2,10}$/.test(state.nickName)) {
      handleAlert(
        `닉네임 재확인`,
        `닉네임을 형식에 맞게 입력했는지 확인해주세요.`,
      );
      return;
    }
    if (!state.checked) {
      handleAlert(
        `이용약관 및 처리방침 확인`,
        `이용약관 및 개인정보 처리방침에 동의해주세요.`,
      );
      return;
    }

    try {
      // 인증 메일 발송
      let message = ``;
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URI}/api/auth/signUp`,
        { ...state },
      );
      message = data.message;

      // 결과 처리
      if (message === `emailReduplication`) {
        handleAlert(
          `이메일 중복`,
          `이미 사용 중인 이메일입니다.\n다른 이메일을 입력해주세요.`,
        );
        return;
      }
      if (message === `nickNameReduplication`) {
        handleAlert(
          `닉네임 중복`,
          `이미 사용 중인 닉네임입니다.\n다른 닉네임을 입력해주세요.`,
        );
        return;
      }
      if (message === `authEamilReduplication`) {
        handleAlert(
          `홍대 이메일 중복`,
          `이미 등록된 홍대 이메일입니다.\n문제가 있을 시, 관리자에게 문의 부탁드립니다.`,
        );
        return;
      }
      history.push(`/signup/summit`);
    } catch (e) {
      handleAlert(`서버 오류`, `관리자에게 문의 부탁드립니다.`);
    }
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

  return (
    <div className="SignUp">
      <Container className="title" maxWidth="sm">
        회원가입
      </Container>
      <Container className="input" maxWidth="sm">
        <FormControl fullWidth>
          <InputLabel htmlFor="id">이메일</InputLabel>
          <Input
            type="email"
            placeholder="이메일을 입력해주세요."
            value={state.email}
            onChange={handleChange('email')}
            autoComplete="off"
            required
          />
          <FormHelperText>자주 사용하는 이메일을 입력해주세요.</FormHelperText>
        </FormControl>
      </Container>
      <Container className="input" maxWidth="sm">
        <FormControl fullWidth>
          <InputLabel htmlFor="password">패스워드</InputLabel>
          <Input
            placeholder="패스워드를 입력해주세요."
            type={state.showPassword ? 'text' : 'password'}
            value={state.password}
            onChange={handleChange('password')}
            endAdornment={endAdornment('showPassword')}
            autoComplete="off"
            required
          />
          <FormHelperText>
            영문, 숫자 및 특수문자를 모두 사용해 8-15자로 입력해주세요.
          </FormHelperText>
        </FormControl>
      </Container>
      <Container className="input" maxWidth="sm">
        <FormControl fullWidth>
          <InputLabel htmlFor="passwordConfirm">패스워드 확인</InputLabel>
          <Input
            id="SignUp-passwordConfirm"
            placeholder="패스워드를 확인해주세요."
            type={state.showPasswordConfirm ? 'text' : 'password'}
            value={state.passwordConfirm}
            onChange={handleChange('passwordConfirm')}
            endAdornment={endAdornment('showPasswordConfirm')}
            autoComplete="off"
            required
          />
          <FormHelperText>패스워드와 동일하게 입력해주세요.</FormHelperText>
        </FormControl>
      </Container>
      <Container className="input" maxWidth="sm">
        <FormControl fullWidth>
          <InputLabel htmlFor="nickName">닉네임</InputLabel>
          <Input
            placeholder="닉네임을 입력해주세요."
            value={state.nickName}
            onChange={handleChange('nickName')}
            autoComplete="off"
            required
          />
          <FormHelperText>
            홍게팅에서 사용할 닉네임을 특수문자 제외 2-10자 입력해주세요.
          </FormHelperText>
        </FormControl>
      </Container>
      <Container className="input" maxWidth="sm">
        <FormControl component="fieldset" fullWidth>
          <FormLabel component="legend">성별</FormLabel>
          <RadioGroup
            aria-label="sex"
            name="sex"
            value={state.sex}
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
      <Container className="input" maxWidth="sm">
        <FormControl fullWidth>
          <InputLabel htmlFor="authEmail">홍대 이메일 아이디</InputLabel>
          <Input
            placeholder="아이디만 입력해주세요."
            value={state.authEmail}
            onChange={handleChange('authEmail')}
            endAdornment={
              <InputAdornment position="end">@mail.hongik.ac.kr</InputAdornment>
            }
            autoComplete="off"
            required
          />
          <FormHelperText>
            {`홍대생 인증을 위해 "홍익대학교" 이메일 아이디만 입력해주세요.`}
          </FormHelperText>
        </FormControl>
        <Paper className="notice">
          <Typography variant="h6" gutterBottom>
            {`아직 홍익대학교 이메일이 없으신가요?`}
          </Typography>
          <Typography variant="body2" gutterBottom>
            {`홍익대학교 이메일을 만들지 않았거나 잊어버렸다면, `}
          </Typography>
          <Typography variant="body2" gutterBottom>
            <a
              href="http://it.hongik.ac.kr/dept/it/0204.html"
              target="_blank"
              rel="noopener noreferrer"
              color="#0045ce"
            >
              이 곳
            </a>
            {`으로 들어가 "Office365 가입하기"를 눌러주세요. `}
          </Typography>
          <Typography variant="body2" gutterBottom>
            {`비밀번호가 기억나지 않는다면 `}
            <a
              href="http://it.hongik.ac.kr/dept/it/o365_pw_reset.html"
              target="_blank"
              rel="noopener noreferrer"
              color="#0045ce"
            >
              이 곳
            </a>
            {`을 참고해주세요.`}
          </Typography>
        </Paper>
      </Container>
      <Container className="input" maxWidth="sm">
        <Checkbox
          checked={state.checked}
          onChange={() => {
            setState({ ...state, checked: !state.checked });
          }}
          value="checked"
          color="primary"
        />
        <span className="service-agreement">
          {`홍개팅의 이용약관 및 개인정보 처리방침에 동의합니다.`}
        </span>
      </Container>
      <Container className="input button" maxWidth="sm">
        <Button
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
});

export default SignUp;
