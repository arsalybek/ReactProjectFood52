import React, { ReactElement ,useState} from 'react'
import { AuthorizationPages } from "../../models/enums";
import { Link } from 'react-router-dom';
import {ShopModel} from '../../models/Shop'
import './shop.css'


interface Props {
   shopList: ShopModel[]
}

export default function Shop({shopList}: Props): ReactElement {
    
    return (
        <>
        <div id="main-header__menu" className="main-header__menu">
                <a href="https://kitap.kz" className="logo-header__link">
                    <img id="logo-img" src="https://food52.com/assets/logo-food52-d15229cd9df0b9e4390efb59bc07477df8ae4dae8897d4f094c7682c4ac70468.svg" alt="Kitap.kz" title="Kitap.kz"/></a> 
                    <div className="navbar__block">
                        <nav className="navbar">
					<ul className="navbar-list">
						<li className="navbar-list__item "><a href="#" data-category="cloth">HOME</a></li>
						<li className="navbar-list__item "><a href="#" data-category="foot">KITCHEN</a></li>
						<li className="navbar-list__item "><a href="#" data-category="toy">COOKWARE</a></li>
						<li className="navbar-list__item "><a href="#" data-category="furniture">TABLE</a></li>
						<li className="navbar-list__item "><a href="#" data-category="tech">GIFTS</a></li>
					</ul>
				</nav>
				<button className="btn add__ad">
					MY CART
				</button>
			</div>
			<div className="search">
				<form className="search__form">
					<label className="search__label">
						<input className="search__input" type="search" placeholder="Search"/>
					</label>
				</form>
			</div>            
		</div>
        <div className="content">
        <span id="theme">OUR BESTSELLERS</span>
        <hr></hr>
        </div>
        
         <div className="container2">
            {shopList.map((category) => {
                return<ul className="catalog">            
				<li className="card">
					<img className="card__image" src={category.image} alt="test"/>
					<div className="card__description">
                        <h3 className="card__header">{category.name}</h3>
                        <div className="card__price">{category.price} $</div>
                        <div className="card__price">Rewiew: {category.review_count}<i className="fa fa-star" aria-hidden="true"></i></div>
					</div>
				</li>
                </ul>
            })
            }
            </div>            
     </>	
    
    );
    }







   