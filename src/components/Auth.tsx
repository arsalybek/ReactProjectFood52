import React, {  ReactElement } from "react";
import { User } from "../models/User";
import Field from "../shared/Field";
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
        <button className="btn btn-primary"onClick={() => login(user)}>Submit</button>
        <button className="btn btn-light"onClick={cancel}>Cancel</button>
        
      </div>

     
</div> 
  );
}
