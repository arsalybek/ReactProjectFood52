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
    // const handleRemove = React.useCallback(
    //     (id) => setUsers(shopList.filter((u) => u.id !== id)),
    //     [users]
    //   );
    return (
        <>
        
        
        <div className="content">
        <span id="theme">OUR BESTSELLERS</span>
        <div id="main-header__menu" className="main-header__menu">
			<div className="search">
				<form className="search__form">
					<label className="search__label">
						<input className="search__input" type="search" placeholder="Search"/>
					</label>
				</form>
			</div>            
		</div>
        {/* <hr></hr> */}
        </div>
        
         <div className="container2">
            {shopList.map((product) => {
                return<ul className="catalog">            
				<li className="recipe-li" key={product.id}>
					<img className="card__image" src={product.image} alt="test"/>
					<div className="card__description">
                        <h3 className="card__header">{product.name}</h3>
                        <div className="card__price">{product.price} $</div>
                        <div className="card__price">Rewiew: {product.review_count}
                        <div className="rating">
                        {/* <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span> */}
                        <div className="clip-star"></div>
                        <div className="clip-star"></div>
                        <div className="clip-star"></div>
                        <div className="clip-star"></div>
                        <div className="clip-star"></div>
                        </div>                      
                        
                        </div>
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






   