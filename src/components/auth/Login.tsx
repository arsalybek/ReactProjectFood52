import React, {  useState,useEffect } from "react";
import { User } from "../../models/User";
import Auth, { AppContext } from "./Auth";
import Registration from "./Registration";
import Header from "../navbar/Header"
import { AuthorizationPages } from "../../models/enums";
import style from './login.module.css'
import { useDispatch, useSelector } from "react-redux";
import { Logged } from "../enums/Logged";
import { stringify } from "querystring";
import Redux from "./Redux";
import { Link } from "react-router-dom";
import Modal from "./Modal";

interface Props {
    users: User[],

    // isAuthed:boolean,
    // checkAuthentication: boolean;
}
function Login({users}:Props) {
    const [showedElement, setShowedElement] = useState(<></>);
    const [isAuthed, setIsAuthed] = useState(false);
    

          
    
    return (
    <>          
        <div className={style.app}>        
            {/* <div className={style.login_page}> */}
              <div className={style.left_side}>
                <div className={style.login}>
                    <h1 className={style.login_h1}>Log In to Food52</h1>
                    <h5>Already have an account?<span className={style.subscribe_button_span}>
                      <button className={style.button_button_orange}onClick={() =>
                        showComponent(AuthorizationPages.Auth)}>Login
                      </button></span> 
                </h5>
                </div>                
                <div className={style.register}>
                <h5>Not a member yet?<span className={style.subscribe_button_span}>
                      <button className={style.button_button_orange}
                    onClick={() => showComponent(AuthorizationPages.Registration)}
                    >Sign Up</button></span></h5>                                             
                </div>         
                <div className={style.login_with}>
                    <h6>Login with</h6>
                    <a href="https://mail.google.com/"><button className={style.google} >G</button></a>
                    <a href="https://www.facebook.com/?stype=lo&jlou=Afd3RDSVmFNzzLo542VVYoBBE5nA4ffYoZGgjooeEo4XYxkmiL61ujQF53kb0-sfI-i6N9FkQ3yYTsX_6EZu8-i1gn9_Ylq5R-9XZZTCZZkv4g&smuh=34169&lh=Ac9-Kasc43F6Wb-GFgo"><button className={style.facebook}>f</button></a>
                </div>
              </div>
            
          <div>
          
            {/* <img className={style.img}src="https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-1.2.1&copy;ixid=eyJhcHBfaWQiOjEyMDd9&copy;auto=format&copy;fit=crop&copy;w=500&copy;q=60"/> */}
          </div>
          </div> 
          
          {showedElement} 

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
            
           user.isAuthed=true;
           checkAuthentication(user)
           console.log(user.isAuthed)
          
        }
     
        if(user.isAuthed){
          
          showComponent(AuthorizationPages.Navbar,checker);
        }
       
      }
    }
  }
  
function checkAuthentication(user:User){
  console.log(user)
 if(user.isAuthed){
   return(
          <div>
            <p>Welcome,{user.email}</p>
              <button className={style.button_button_orange}>Sign out</button>
          </div>
          
      //     <div style={{ zIndex: 1 }} onClick={() => console.log("clicked")}>
       
      //      <button>Sign out</button>
      // </div>
   )
 }
 return <> showComponent(AuthorizationPages.Navbar);</>
    
  
}

  export default Login;