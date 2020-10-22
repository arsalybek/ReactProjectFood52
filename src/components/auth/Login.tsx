import React, {  useState } from "react";
import { User } from "../../models/User";
import Auth from "./Auth";
import Registration from "./Registration";
import Navbar from "../navbar/Navbar"
import { AuthorizationPages } from "../../models/enums";

interface Props {
    users: User[];
}
function Login({users}:Props) {
    const [showedElement, setShowedElement] = useState(<></>);
  
    return (
    <>
        <Navbar users={users}/>            
        <div className="app">
        
            <div className="login_page">
            <div className="left_side">
                <h2>Log In to Food52</h2>
                <h5>Already have an account?       <button className="btn btn-outline-warning" onClick={() => showComponent(AuthorizationPages.Auth)}>Login</button></h5>
                <div className="register">
                <h5>Not a member yet?      <button className="btn btn-outline-primary" onClick={() => showComponent(AuthorizationPages.Registration)}>Sign Up</button></h5>           
                     
                </div>
               
                {/* <Auth login={authenticateUser} cancel={showComponent}/> */}
            

      <div className="after_login">
        <input id="save" type="checkbox" value="Есте сақтау"/><label>Remember me</label>
        <a href="">Forget the password?</a>
      </div>
      <h2>Login with</h2>
      <div className="login_with">
        <a href="https://mail.google.com/"><button className="google" >G</button></a>
        <a href="https://www.facebook.com/?stype=lo&jlou=Afd3RDSVmFNzzLo542VVYoBBE5nA4ffYoZGgjooeEo4XYxkmiL61ujQF53kb0-sfI-i6N9FkQ3yYTsX_6EZu8-i1gn9_Ylq5R-9XZZTCZZkv4g&smuh=34169&lh=Ac9-Kasc43F6Wb-GFgo"><button className="facebook">f</button></a>
      </div>
      </div>
    </div>
  <div className="right_side">
    <img className="img"src="https://i.pinimg.com/originals/e1/dd/a6/e1dda685e6609b37a3bef729eed03fd9.jpg"/>
  </div>
  </div>
 
  
        {/* <div className="leftBlock">
          <h5>Log In to Food52</h5><br/> */}
           
          {/* <button className="loginBtn" onClick={() => showComponent(AuthorizationPages.Auth)}>Login</button>
          <div>
            <a href="">Login with Facebook</a>
          </div>
          </div>
          <div className="rightBlock">
            <h5>Create a New Account</h5>
            <h6>Not a member yet?</h6>
          <button className="signupBtn" onClick={() => showComponent(AuthorizationPages.Registration)}>Sign Up</button>
          </div>    */}
       
  
        {showedElement}
      {/* </div> */}
    </>
    
      
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
  
        case AuthorizationPages.Navbar:
          if (user) {
            setShowedElement((prevElement) => (prevElement = <Navbar users={users} />));
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
          showComponent(AuthorizationPages.Navbar,checker);
        }
      }
    }
  }
  
  export default Login;