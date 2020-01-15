import React, {useState} from 'react';

import Input from '@material-ui/core/Input';
import Radio from '@material-ui/core/Radio';

import { observer } from 'mobx-react';
import { useForm } from "react-hook-form";

import './SignUp.scss';

const SignUp = observer(() => {
  const { register, handleSubmit, errors } = useForm();
  const [ selectedGender, setSelectedGender ] = useState('남');
  
  const handleChangeGender = (e) => {
    setSelectedGender(e.target.value);
    console.log(selectedGender, e.target.value); // 검토용
  }

  const handleAlert = (_title, _message) => {
    //alert(`${_title}`);
    alert(`${_message}`);
  };

  const onSubmit = (data) => {
    const { email, password, passwordCheck, nickname, gender, schoolIDCard } = data;
    if (email === '') {
      handleAlert(`이메일 미입력`, `이메일을 입력해주세요.`);
      return;
    }
    if (password === '') {
      handleAlert(`비밀번호 미입력`, `비밀번호를 입력해주세요.`);
      return;
    }
    if (passwordCheck === '') {
      handleAlert(`비밀번호 확인 미입력`, `비밀번호 확인을 입력해주세요.`);
      return;
    }
    if (nickname === '') {
      handleAlert(`닉네임 미입력`, `닉네임을 입력해주세요.`);
      return;
    }
    if (gender === '') {
      handleAlert(`성별 미입력`, `성별을 입력해주세요.`);
      return;
    }
    if (schoolIDCard === '') {
      handleAlert(`학생증 미입력`, `학생증을 입력해주세요.`);
      return;
    }
  }

  return(
    <div className="SignUp">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>이메일</label>
          <input 
            className="textInput"
            name="email"
            ref={register}
          />
        </div>
        
        <div>
          <label>비밀번호</label>
          <input
            className="textInput" 
            name="password"
            ref={register}
          />
        </div>

        <div>
          <label>비밀번호 확인</label>
          <input
            className="textInput"
            name="passwordCheck"
            ref={register}
          />
        </div>

        <div>
          <label>닉네임</label>
          <input
            className="textInput"
            name="nickname"
            ref={register}
          />
        </div>

        <div>
          <label>성별</label>
          <input
            className="radioInput"
            type="radio"
            name="gender"
            value="male"
            checked
            ref={register}
          />남자
          <input
            className="radioInput"
            type="radio"
            name="gender"
            value="female"
            ref={register}
          />여자
        </div>

        <div>
          <label>학생증 사진</label>
          <input
            className="textInput"
            type="file"
            name="schoolIDCard"
            ref={register}
          />
        </div>

        <div>
          <input
            type="submit"
            ref={register}
          />
        </div>
      </ form>
    </div>
  )
})

export default SignUp;