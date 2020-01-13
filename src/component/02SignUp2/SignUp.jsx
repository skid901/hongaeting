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

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
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