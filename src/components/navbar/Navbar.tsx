import React, { ReactElement, useContext, useState, useRef, useCallback, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { LangContext } from '../context/Lang';
import './navbar.css'

interface Props {
    
}

export default function Navbar(props: Props): ReactElement {
   
  const { state: { language}, dispatch: { setLanguage, translate } } = useContext(LangContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownEl = useRef<HTMLDivElement>(null);

  const chooseLanguageHandler = (value: string) => {
    setShowDropdown(false);
    setLanguage(value);
  }
    
    return (
        <div className="container">
            <div id="main-header__menu" className="main-header__menu">
                <a className="logo-header__link" href ="/home">
                    <img id="logo-img" src="https://food52.com/assets/logo-food52-d15229cd9df0b9e4390efb59bc07477df8ae4dae8897d4f094c7682c4ac70468.svg" alt="Kitap.kz" title="Kitap.kz"/></a> 
            <div className="header__nav_lang">
            
            {<div className="dropdown" ref={dropdownEl}>
            <p className="selected" onClick={() => setShowDropdown(!showDropdown)}>{language}</p>

                <span onClick={() => chooseLanguageHandler('EN')}>EN</span>  
                <span onClick={() => chooseLanguageHandler('RU')}>RU</span>  
                <span onClick={() => chooseLanguageHandler('KZ')}>KZ</span>  
              </div>
            }
          </div>
        <div className="navbar__block">
            <nav className="navbar">
            <ul className="navbar-list">
            <Link to="/recipes">
            <li className="navbar-list__item "><a>{translate('recipe')}</a></li>
            </Link>
            <li className="navbar-list__item "><a>{translate('blog')}</a></li> 
            <Link to="/menu">
            <li className="navbar-list__item "><a>{translate('food')}</a></li> 
            </Link>
            <Link to="/SHOP">
            <li className="navbar-list__item "><a>{translate('shop')}</a></li>
            </Link>
            </ul>
            
            </nav>
            <img className="icon-img" src="data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='22' viewBox='0 0 18 22'%3E%3Cg fill='none' fill-rule='evenodd' stroke='%23444' stroke-linecap='round' stroke-width='1.2'%3E%3Cpath d='M14.632 2.659a6.589 6.589 0 0 1 1.434 9.227c-2.159 2.943-6.303 3.584-9.256 1.43a6.589 6.589 0 0 1-1.434-9.227c2.16-2.943 6.304-3.583 9.256-1.43zM6.81 13.316l-5.424 7.392'/%3E%3C/g%3E%3C/svg%3E"/>
            <img className="icon-img" src="data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='21' viewBox='0 0 24 21'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath stroke='%23444' stroke-linecap='round' stroke-width='1.2' d='M19.616 13.038h-13.2L4.57 3.315h18.037z'/%3E%3Cpath stroke='%23444' stroke-linecap='round' stroke-width='1.2' d='M1.386 1.385h2.668l3.058 15.11h11.876'/%3E%3Cpath fill='%23444' d='M9.922 19.695a1.3 1.3 0 0 1-1.302 1.299 1.3 1.3 0 0 1-1.303-1.299 1.3 1.3 0 0 1 1.303-1.298 1.3 1.3 0 0 1 1.302 1.298M18.7 19.695a1.3 1.3 0 0 1-1.303 1.299 1.3 1.3 0 0 1-1.303-1.299 1.3 1.3 0 0 1 1.303-1.298 1.3 1.3 0 0 1 1.302 1.298'/%3E%3C/g%3E%3C/svg%3E"/>
            <Link to="/login" className="button button_orange guest_header">Log in/Sign up  </Link>
            {/* <a className="button button_orange guest_header">Log in/Sign up</a>  */}
            </div>
        </div> 
    </div>
    )
}







