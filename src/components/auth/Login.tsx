import React, {  useState,useEffect } from "react";
import { User } from "../../models/User";
import Auth, { AppContext } from "./Auth";
import Registration from "./Registration";
import { AuthorizationPages } from "../../models/enums";
import style from './login.module.css'
interface Props {
    users: User[];
}
function Login({users}:Props) {
    const [showedElement, setShowedElement] = useState(<></>);
   

    return (
    <>          
        <div className={style.app}>        
            <div className={style.login_page}>
            <div className={style.left_side}>
              <div className={style.login}>
                <h2>Log In to Food52</h2>
                <h5>Already have an account?<button className={style.btn} 
                onClick={() => showComponent(AuthorizationPages.Auth)
                }>Login
                </button></h5>
                </div>
                
                <div className={style.register}>
                <h5>Not a member yet?<button className={style.btn} 
                onClick={() => showComponent(AuthorizationPages.Registration)}
                >Sign Up</button></h5>
                           
                     
                </div>         
             
            

      <div className={style.after_login}>
        <input type="checkbox" value="Есте сақтау"/><label>Remember me</label>
        <br></br>
        <a href="">Forget the password?</a>
      </div>
      <h6>Login with</h6>
      <div className={style.login_with}>
        <a href="https://mail.google.com/"><button className={style.google} >G</button></a>
        <a href="https://www.facebook.com/?stype=lo&jlou=Afd3RDSVmFNzzLo542VVYoBBE5nA4ffYoZGgjooeEo4XYxkmiL61ujQF53kb0-sfI-i6N9FkQ3yYTsX_6EZu8-i1gn9_Ylq5R-9XZZTCZZkv4g&smuh=34169&lh=Ac9-Kasc43F6Wb-GFgo"><button className={style.facebook}>f</button></a>
      </div>
      </div>
    </div>
  <div>
    <img className={style.img} src="https://blog.toryburch.com/wp-content/uploads/2016/11/Food52_960_slide1.jpg"/>
  </div>
  </div>
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
            // <AppContext.Provider value={ {
            //     authenticated: true,
            //   } }>
            // </AppContext.Provider> 
          showComponent(AuthorizationPages.Navbar,checker);
        }
      }
    }
  }
  
  export default Login;