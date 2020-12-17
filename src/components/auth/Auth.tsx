// import React, {  ReactElement } from "react";
// import { User } from "../../models/User";
// import Field from "../../shared/Field";
// import { Link } from 'react-router-dom';
// import './style.css'

// interface Props {
//   login: (user: User) => void;
//   cancel: () => void;
// }
// export const AppContext = React.createContext({ 
//   authenticated: true,
//   lang: 'en',
//   theme: 'dark'
// });

// // type ContextProps = { 
// //   authenticated: boolean,
// //   lang: string,
// //   theme: string
// // };

// // export const AppContext = 
// //   React.createContext<Partial<ContextProps>>({});
// export default function Auth({ login, cancel }: Props): ReactElement {
//   let user: User = { email: "", id: 0, password: "", name: "" };

//   return (
    
//     <div className="fields">
//       <Field
//         type="email"
//         label="Email"
//         onChange={(e) => {
//           user.email = e.target.value;
//         }}
//         required
//       />
//       <Field
//         type="password"
//         label="Password"
//         onChange={(e) => {
//           user.password = e.target.value;
//         }}
//         required
//       />

//       <div className="buttons">
//       <Link to="/recipes" className="btn btn-primary btn-lg" onClick={() => login(user)}>Submit</Link>
//       <button className="btn btn-warning btn-lg" onClick={cancel}>Cancel</button>        
//       </div>

     
// </div> 
//   );
// }
import React, {  ReactElement } from "react";
import { Link } from 'react-router-dom';
import './auth.css'
import { useForm } from "react-hook-form";
import { User } from "../../models/User";

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
  let user: User = { email: "", id: 0, password: "", name: "" };
  const { register, handleSubmit, errors } = useForm<PersonScore>();
  const onSubmit = (data: PersonScore) => {
    console.log("data", data);
  };


  return (
    <div className="fields">
      <form onSubmit={handleSubmit(onSubmit)}>
      {/* <div className="field">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          ref={register({ required: true })}
        />
        {errors.name && errors.name.type === "required" && (
          <div className="error">Your must enter your name.</div>
        )}
      </div> */}
      <div className="field">
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
          <div className="error">Your must enter your email address.</div>
        )}
      </div>
      <div className="field">
        <label htmlFor="password">Password</label>
        <input
          onChange={(e) => {
            user.password = e.target.value;
          }}
          type="text"
          id="score"
          name="password"
          ref={register({ pattern: /^[A-Za-z]+$/i, required: true})}
          // ref={register({ required: true })}
        />
        {errors.password && errors.password.type === "required" && (
          <div className="error">Your must enter your score.</div>
        )}
      </div>
      <button className="btn-primary btn-lg" onClick={() => login(user)} type="submit">Submit</button>
      <Link to="/recipes"  type="submit" className="a" onClick={() => login(user)}>a</Link>
      <button className="btn-warning btn-lg" onClick={cancel}>Cancel</button>
      
    </form>
    </div>
  );
}