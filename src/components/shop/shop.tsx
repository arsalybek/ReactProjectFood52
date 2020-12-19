import React, { ReactElement ,useState} from 'react'

import {ShopModel} from '../../models/Shop'
import style from './shop.module.css'



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
			<div className={style.search}>
				<form className={style.search__form}>
					<label className={style.search__label}>
						<input className={style.search__input} type="search" placeholder="Search"/>
					</label>
				</form>
			</div>            
		</div>
        {/* <hr></hr> */}
        </div>
        
         <div className={style.container2}>
            {shopList.map((product) => {
                return<ul className={style.catalog}>            
				<li className={style.recipe_li} key={product.id}>
					<img className={style.card__image} src={product.image} alt="test"/>
					<div className={style.card__description}>
                        <h3 className={style.card__header}>{product.name}</h3>
                        <div className={style.card__price}>{product.price} $</div>
                        <div className={style.card__price}>Rewiew: {product.review_count}
                        <div className={style.rating}>
                        <div className={style.clip_star}></div>
                        <div className={style.clip_star}></div>
                        <div className={style.clip_star}></div>
                        <div className={style.clip_star}></div>
                        <div className={style.clip_star}></div>
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






   