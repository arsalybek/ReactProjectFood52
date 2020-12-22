import React, { ReactElement } from "react";
import { User } from "../../models/User";
import Field from "../../shared/Field";
import style from './auth.module.css'
interface Props {
  registrate: (user: User) => void;
  cancel: () => void;
}

export default function Registration({
  registrate,
  cancel,
}: Props): ReactElement {
  let user: User = { email: "", id: 0, password: "", name: "" ,isAuthed:false};

  return (
    <div className={style.fields}>
      <Field 
        type="text"
        label="Name"
        onChange={(e) => {
          user.name = e.target.value;
        }}
        required
      />
      <Field
        type="email"
        label="Email"
        onChange={(e) => {
          user.email = e.target.value;
        }}
        required
      />
      <Field
        type="password"
        label="Password"
        onChange={(e) => {
          user.password = e.target.value;
        }}
        required
      />

      <div className={style.buttons}>
        <button className={style.btn1} onClick={() => registrate(user)}>Submit</button>
        <button className={style.btn2} onClick={cancel}>Cancel</button>
      </div>
    </div>
  );
}