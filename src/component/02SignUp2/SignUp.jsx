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
      <form>
        <input />
        <input />
        <input />
      </ form>
    </div>
  )
})

export default SignUp;