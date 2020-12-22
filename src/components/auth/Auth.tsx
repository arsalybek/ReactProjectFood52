import React, {  ReactElement } from "react";
import { User } from "../../models/User"
import { Link } from 'react-router-dom';
import style from './auth.module.css'
import { useForm } from "react-hook-form";
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Redux from './Redux'
import { useDispatch, useSelector } from "react-redux";
import { Logged } from "../enums/Logged";
// import Navbar from "../navbar/Navbar";
interface Props {
  login: (user: User) => void;
  cancel: () => void;
}

type PersonScore = {
  name: string;
  email: string;
  password: string;
};
export const AppContext = React.createContext({ 
  authenticated: true,
  lang: 'en',
  theme: 'dark'
});


export default function Auth({ login, cancel }: Props): ReactElement {
  let user: User = { email: "", id: 0, password: "", name: "",isAuthed:false };
  const { register, handleSubmit, errors } = useForm<PersonScore>();
  const onSubmit = (data: PersonScore) => {
    console.log("data", data);
    return(
      <div className={style.data_login}>
        <p>{user.email}</p>
      </div>
    )
  };
  
    
  return (

    <div className={style.fields}>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className={style.field}> 
        <label htmlFor="email">Email</label>
        <input
         
          type="email"
          id="email"
          name="email"
          onChange={(e) => {
            user.email = e.target.value;
          }}
          ref={register({ required: true })}
        />
        {errors.email && errors.email.type === "required" && (
          <div className={style.error}>Your must enter your email address.</div>
        )}
      </div>
      <div className={style.field}>
        <label htmlFor="password">Password</label>
        <input
          
          onChange={(e) => {
            user.password = e.target.value;
          }}
          type="password"
          id="score"
          name="password"
          // ref={register({ pattern: /^[A-Za-z]+$/i, required: true})}
          ref={register({ required: true })}
        />
        {errors.password && errors.password.type === "required" && (
          <div className={style.error}>Your must enter your password.</div>
        )} 
        
      </div>
      <div className={style.buttonsLogin}>
      <button id="btn1" className={style.btn1} onClick={() => login(user)} type="submit">Submit</button>

      <button className={style.btn2} onClick={cancel}>Cancel</button>
            {/* <Link to="/recipes" className={style.submit} type="submit"  onClick={() => login(user)}>Submit</Link> */}
      </div>
      
    </form>
    </div>
  );
}