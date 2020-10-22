import React, {  ReactElement } from "react";
import { User } from "../../models/User";
import Field from "../../shared/Field";
import { Link } from 'react-router-dom';
import './style.css'

interface Props {
  login: (user: User) => void;
  cancel: () => void;
}
export const AppContext = React.createContext({ 
  authenticated: true,
  lang: 'en',
  theme: 'dark'
});
export default function Auth({ login, cancel }: Props): ReactElement {
  let user: User = { email: "", id: 0, password: "", name: "" };

  return (
    <div className="fields">
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

      <div className="buttons">
      <Link to="/recipes" className="btn btn-primary btn-lg" onClick={() => login(user)}>Submit</Link>
      <button className="btn btn-warning btn-lg" onClick={cancel}>Cancel</button>        
      </div>

     
</div> 
  );
}
