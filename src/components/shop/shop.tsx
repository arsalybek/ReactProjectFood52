import React, { ReactElement ,useState} from 'react'
import { AuthorizationPages } from "../../models/enums";
import { Link } from 'react-router-dom';
import {ShopModel} from '../../models/Shop'
import './shop.css'
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';


interface Props {
   shopList: ShopModel[]
}

export default function Shop({shopList}: Props): ReactElement {
    
    return (
        <>
        <div id="main-header__menu" className="main-header__menu">
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
				<li className="recipe-li">
					<img className="card__image" src={category.image} alt="test"/>
					<div className="card__description">
                        <h3 className="card__header">{category.name}</h3>
                        <div className="card__price">{category.price} $</div>
                        <div className="card__price">Rewiew: {category.review_count}<i className="fa fa-star" aria-hidden="true"></i></div>
                        <button>add to cart</button>
					</div>
				</li>
                </ul>
            })
            }
            </div>           
     </>	    
    );
    }






   