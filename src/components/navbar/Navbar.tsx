import React, { ReactElement ,useState} from 'react'
import { AuthorizationPages } from "../../models/enums";
import { Link } from 'react-router-dom';
import { User } from "../../models/User";
import './navbar.css'
import Login from "../auth/Login";

interface Props {
   users:User[]
}

export default function Navbar({users}: Props): ReactElement {
    const [showedElement, setShowedElement] = useState(<></>);
    return (
        // <div className="navigation-bar">
        //     {/* <button className="login-button">Log in/Sign up</button>
        //         <img src="data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='22' viewBox='0 0 18 22'%3E%3Cg fill='none' fill-rule='evenodd' stroke='%23444' stroke-linecap='round' stroke-width='1.2'%3E%3Cpath d='M14.632 2.659a6.589 6.589 0 0 1 1.434 9.227c-2.159 2.943-6.303 3.584-9.256 1.43a6.589 6.589 0 0 1-1.434-9.227c2.16-2.943 6.304-3.583 9.256-1.43zM6.81 13.316l-5.424 7.392'/%3E%3C/g%3E%3C/svg%3E"/>
        //         <img src="data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='21' viewBox='0 0 24 21'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath stroke='%23444' stroke-linecap='round' stroke-width='1.2' d='M19.616 13.038h-13.2L4.57 3.315h18.037z'/%3E%3Cpath stroke='%23444' stroke-linecap='round' stroke-width='1.2' d='M1.386 1.385h2.668l3.058 15.11h11.876'/%3E%3Cpath fill='%23444' d='M9.922 19.695a1.3 1.3 0 0 1-1.302 1.299 1.3 1.3 0 0 1-1.303-1.299 1.3 1.3 0 0 1 1.303-1.298 1.3 1.3 0 0 1 1.302 1.298M18.7 19.695a1.3 1.3 0 0 1-1.303 1.299 1.3 1.3 0 0 1-1.303-1.299 1.3 1.3 0 0 1 1.303-1.298 1.3 1.3 0 0 1 1.302 1.298'/%3E%3C/g%3E%3C/svg%3E"/>
        //     <hr></hr> */}
        //     <img src=""/>
        // <nav>
        //   <ul className="nav_links" >
        //     <li><a >Кітап</a></li>
        //     <li><a >Комикс</a></li>
        //   </ul>
        // </nav>
        // <button  className="login" type="button">Кіру</button>
        // </div>
        <div className="container">
            <div id="main-header__menu" className="main-header__menu">
                <a href="https://kitap.kz" className="logo-header__link">
                    <img id="logo-img" src="https://food52.com/assets/logo-food52-d15229cd9df0b9e4390efb59bc07477df8ae4dae8897d4f094c7682c4ac70468.svg" alt="Kitap.kz" title="Kitap.kz"/></a> 
                    <div className="navbar__block">
                        <nav className="navbar">
                        <ul className="navbar-list">
                        <li className="navbar-list__item "><a href="https://kitap.kz/book">RECIPES</a></li>
                     <li className="navbar-list__item "><a href="https://kitap.kz/audio-book">BLOG</a></li> 
                     <li className="navbar-list__item "><a href="https://kitap.kz/video">FOOD</a></li> 
                     <li className="navbar-list__item "><a href="https://kitap.kz/music">SHOP</a></li>
                     </ul>
                     </nav>
                     <img src="data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='22' viewBox='0 0 18 22'%3E%3Cg fill='none' fill-rule='evenodd' stroke='%23444' stroke-linecap='round' stroke-width='1.2'%3E%3Cpath d='M14.632 2.659a6.589 6.589 0 0 1 1.434 9.227c-2.159 2.943-6.303 3.584-9.256 1.43a6.589 6.589 0 0 1-1.434-9.227c2.16-2.943 6.304-3.583 9.256-1.43zM6.81 13.316l-5.424 7.392'/%3E%3C/g%3E%3C/svg%3E"/>
                <img src="data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='21' viewBox='0 0 24 21'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath stroke='%23444' stroke-linecap='round' stroke-width='1.2' d='M19.616 13.038h-13.2L4.57 3.315h18.037z'/%3E%3Cpath stroke='%23444' stroke-linecap='round' stroke-width='1.2' d='M1.386 1.385h2.668l3.058 15.11h11.876'/%3E%3Cpath fill='%23444' d='M9.922 19.695a1.3 1.3 0 0 1-1.302 1.299 1.3 1.3 0 0 1-1.303-1.299 1.3 1.3 0 0 1 1.303-1.298 1.3 1.3 0 0 1 1.302 1.298M18.7 19.695a1.3 1.3 0 0 1-1.303 1.299 1.3 1.3 0 0 1-1.303-1.299 1.3 1.3 0 0 1 1.303-1.298 1.3 1.3 0 0 1 1.302 1.298'/%3E%3C/g%3E%3C/svg%3E"/>
                <Link to="/login" className="button button_orange guest_header">Log in/Sign up  </Link>
                    
                     </div>
        </div> 
        </div>
    )

    function showComponent(page?: AuthorizationPages, user?: User) {
        switch (page) {
          case AuthorizationPages.Login:
            setShowedElement(
              (prevElement) =>
                (prevElement = <Login users={users} />)
            );
            break;
    
          
    
          default:
            setShowedElement((prevElement) => (prevElement = <></>));
            break;
        }
      }


      

}



