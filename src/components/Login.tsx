import './App.css';
import React, { useState } from "react";
import "./App.css";
import Auth from "./Auth";
import Registration from "./Registration";
import Welcome from "./Welcome";
import { AuthorizationPages } from "../models/enums";
import { User } from "../models/User";


const users: User[] = [
  {
    id: 1,
    name: "Ayana",
    email: "aadilova@gmail.com",
    password: "12345a",
  },
  {
    id: 2,
    name: "Ayaylum",
    email: "ayaylum@gmail.com",
    password: "12345a",
  },
  {
    id: 3,
    name: "Nargiza",
    email: "nargiza@gmail.com",
    password: "12345a",
  }

];

function App() {
  const [showedElement, setShowedElement] = useState(<></>);

  return (
   
    <div className="apP">
      <div className="leftBlock">
        <h5>Log In to Food52</h5><br/>
          <h6>Already have an account?</h6><br/>
        <button className="loginBtn" onClick={() => showComponent(AuthorizationPages.Auth)}>Login</button>
        <div>
          <a href="https://www.facebook.com/?stype=lo&jlou=Afd3RDSVmFNzzLo542VVYoBBE5nA4ffYoZGgjooeEo4XYxkmiL61ujQF53kb0-sfI-i6N9FkQ3yYTsX_6EZu8-i1gn9_Ylq5R-9XZZTCZZkv4g&smuh=34169&lh=Ac9-Kasc43F6Wb-GFgo">Login with Facebook</a>
        </div>
        </div>
        <div className="rightBlock">
          <h5>Create a New Account</h5>
          <h6>Not a member yet?</h6>
        <button className="signupBtn" onClick={() => showComponent(AuthorizationPages.Registration)}>Sign Up</button>
        </div>
       
     

      {showedElement}
    </div>

  );

  function showComponent(page?: AuthorizationPages, user?: User) {
    switch (page) {
      case AuthorizationPages.Auth:
        setShowedElement(
          (prevElement) =>
            (prevElement = <Auth login={authenticateUser} cancel={showComponent} />)
        );
        break;

      case AuthorizationPages.Registration:
        setShowedElement(
          (prevElement) =>
            (prevElement = (
              <Registration registrate={createNewUser} cancel={showComponent} />
            ))
        );
        break;

      case AuthorizationPages.Welcome:
        if (user) {
          setShowedElement((prevElement) => (prevElement = <Welcome user={user} />));
        }
        break;

      default:
        setShowedElement((prevElement) => (prevElement = <></>));
        break;
    }
  }

  function createNewUser(user: User) {
    if (users && user) {
      const checker = users.find((u) => u.email === user.email);
      if (checker) {
        return;
      }
      user.id = users.length + 1;
      users.push(user);
      showComponent(AuthorizationPages.Auth);
    }
  }

  function authenticateUser(user: User) {
    if (users && user) {
      console.log(user);
      const checker = users.find(
        (u) => u.email === user.email && u.password === user.password
      );
      if (checker) {
        showComponent(AuthorizationPages.Welcome,checker);
      }
    }
  }
}


export default App;