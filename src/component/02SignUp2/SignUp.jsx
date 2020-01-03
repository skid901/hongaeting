import React, {useState} from 'react';

import Input from '@material-ui/core/Input';
import Radio from '@material-ui/core/Radio';

import { observer } from 'mobx-react';
import { useForm } from "react-hook-form";

const SignUp = observer(() => {
  const { register, handleSubmit, errors } = useForm();
  const [ selectedGender, setSelectedGender ] = useState('남');
  
  const handleChangeGender = (e) => {
    setSelectedGender(e.target.value);
    console.log(selectedGender, e.target.value); // 검토용
  }

  const onSubmit = (data) => {
    console.log(data);
  }

  return(
    <div className="SignUp">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>이메일</label>
          <Input
            name = "Email"
            placeholder="Email"
            inputRef={register({ required: true })}
          />
          {errors.Email && '이메일을 입력하세요'}
        </div>
{/*         
        <div>
          <label>비밀번호</label>
          <Input
            name="Password"
            placeholder="Password"
            inputRef={register({ required: true })}
          />
          {errors.Password && '비밀번호를 입력하세요'}

        </div>

        <div>
          <label>비밀번호 확인</label>
          <Input
            name="PasswordCheck"
            placeholder="Password check"
            inputRef={register({ required: true })}
          />
        </div>

        <div>
          <label>닉네임</label>
          <Input
            name="Nickname"
            placeholder="Nickname"
            inputRef={register({ required: true })}
          />
          {errors.Nickname && '닉네임을 입력하세요'}          
        </div>
*/}
        <div>
          <label>성별</label>
          <Radio
            name = "남"
            checked={selectedGender === "남"}
            value="남"
            onChange = {handleChangeGender}
            inputRef={register}
          />
          <Radio
            name = "여"
            checked={selectedGender === "여"}
            value="여"
            onChange = {handleChangeGender}
            inputRef={register}
          />
        </div>
{/*
        <div>
          <label>학교 이메일</label>
          <Input
            name="SchoolEmail"
            placeholder="School Email"
            inputRef={register({ required: true })}
          />
          {errors.SchoolEmail && '학교 이메일을 입력하세요'}          
        </div>

        <div>
          <label>처리방침 동의여부</label>
          <Radio
            name="agreement"
            inputRef={register({ required: true })}
          />
          {errors.agreement && '동의하지 않으면 이용할 수 없어요'}
        </div>

        <div>
          <label>학생증 사진</label>
          <Input
            name = "studentIDCard"
            type = "file"
            placeholder="image"
            inputRef={register({ required: true })}
          />
          {errors.studentIDCard && '학생증을 첨부하세요'}
        </div>
         */}
        <button type="submit">회원가입</button>
      </form>

    </div>
  )
})

export default SignUp;