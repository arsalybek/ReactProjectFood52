import React, { ReactElement,useState } from 'react'
import './navbar.css'
import Auth from "../components/Auth";
import Registration from "../components/Registration";
import Welcome from "../components/Welcome";
import { AuthorizationPages } from "../models/enums";
import { User } from "../models/User";


interface Props {
   
}
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

export default function Navbar(props: Props): ReactElement {
    const [showedElement, setShowedElement] = useState(<></>);
    return (
        <div>
            <nav>
                {/* <img src="https://food52.com/assets/logo-food52-d15229cd9df0b9e4390efb59bc07477df8ae4dae8897d4f094c7682c4ac70468.svg"/> */}
                <a href="#">RECIPES</a>
                <a href="#">FOOD</a>
                <div className="animation start-home"></div>
                <button className="login-button" onClick={() => showComponent(AuthorizationPages.Auth)}>Log in/Sign</button>
                <img src="data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='22' viewBox='0 0 18 22'%3E%3Cg fill='none' fill-rule='evenodd' stroke='%23444' stroke-linecap='round' stroke-width='1.2'%3E%3Cpath d='M14.632 2.659a6.589 6.589 0 0 1 1.434 9.227c-2.159 2.943-6.303 3.584-9.256 1.43a6.589 6.589 0 0 1-1.434-9.227c2.16-2.943 6.304-3.583 9.256-1.43zM6.81 13.316l-5.424 7.392'/%3E%3C/g%3E%3C/svg%3E"/>
                <img src="data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='21' viewBox='0 0 24 21'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath stroke='%23444' stroke-linecap='round' stroke-width='1.2' d='M19.616 13.038h-13.2L4.57 3.315h18.037z'/%3E%3Cpath stroke='%23444' stroke-linecap='round' stroke-width='1.2' d='M1.386 1.385h2.668l3.058 15.11h11.876'/%3E%3Cpath fill='%23444' d='M9.922 19.695a1.3 1.3 0 0 1-1.302 1.299 1.3 1.3 0 0 1-1.303-1.299 1.3 1.3 0 0 1 1.303-1.298 1.3 1.3 0 0 1 1.302 1.298M18.7 19.695a1.3 1.3 0 0 1-1.303 1.299 1.3 1.3 0 0 1-1.303-1.299 1.3 1.3 0 0 1 1.303-1.298 1.3 1.3 0 0 1 1.302 1.298'/%3E%3C/g%3E%3C/svg%3E"/>
            </nav>
            {showedElement}
        </div>
    )
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



