import React, { FC, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { LangContext } from '../context/Lang';
import styles from '../navbar/header.module.scss';


interface HeaderProps {
  fixed?: boolean;
  transparent?: boolean;
}

const Header: FC<HeaderProps> = ({ fixed, transparent }) => {
  const { state: { language }, dispatch: { setLanguage, translate } } = useContext(LangContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownEl = useRef<HTMLUListElement>(null);

  let headerClass = styles.header;

  if (fixed) {
    headerClass += ' header--fixed'
  }

  if (transparent) {
    headerClass += ' header--transparent'
  }

  const handleClickOutside = useCallback((e) => {
    if (showDropdown && e.target.closest('.dropdown') !== dropdownEl.current) {
      setShowDropdown(false);
    }
  }, [showDropdown, setShowDropdown, dropdownEl]);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    }
  }, [handleClickOutside]);

  const chooseLanguageHandler = (value: string) => {
    setShowDropdown(false);
    setLanguage(value);
  }

  return (
    <header className={headerClass}>
      <div className={styles.container}>
        <div className={styles.header__brand}>
          <Link to="/home"><img className={styles.logo_img} src="https://food52.com/assets/logo-food52-d15229cd9df0b9e4390efb59bc07477df8ae4dae8897d4f094c7682c4ac70468.svg" /></Link>
        </div>
        <div className={styles.header__nav}>
          <div className={styles.header__nav_lang}>
            <p className={styles.selected} onClick={() => setShowDropdown(!showDropdown)}>{language}</p>
            {showDropdown && <ul className={styles.dropdown} ref={dropdownEl}>
              <li onClick={() => chooseLanguageHandler('EN')}>EN</li>
              <li onClick={() => chooseLanguageHandler('RU')}>RU</li>
              <li onClick={() => chooseLanguageHandler('KZ')}>KZ</li>
            </ul>
            }
          </div>
          <ul className={styles.header__nav_menu}>
            <li><NavLink to="/recipes" exact>{translate('recipe')}</NavLink></li>
            <li><NavLink to="/shop" exact>{translate('shop')}</NavLink></li>
            <li><img className={styles.icon_img} src="data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='21' viewBox='0 0 24 21'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath stroke='%23444' stroke-linecap='round' stroke-width='1.2' d='M19.616 13.038h-13.2L4.57 3.315h18.037z'/%3E%3Cpath stroke='%23444' stroke-linecap='round' stroke-width='1.2' d='M1.386 1.385h2.668l3.058 15.11h11.876'/%3E%3Cpath fill='%23444' d='M9.922 19.695a1.3 1.3 0 0 1-1.302 1.299 1.3 1.3 0 0 1-1.303-1.299 1.3 1.3 0 0 1 1.303-1.298 1.3 1.3 0 0 1 1.302 1.298M18.7 19.695a1.3 1.3 0 0 1-1.303 1.299 1.3 1.3 0 0 1-1.303-1.299 1.3 1.3 0 0 1 1.303-1.298 1.3 1.3 0 0 1 1.302 1.298'/%3E%3C/g%3E%3C/svg%3E" /></li>
            <li><Link to="/login" className={styles.login_btn}>{translate('auth')}</Link></li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;