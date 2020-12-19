import React from 'react';
import style from './menu-list-item.module.css';

const MenuListItem = ({menuItem,onAddToCart,cartItems}) => {
    const {title,price,url,category} = menuItem
    const isInCart = product => {
        return !!cartItems.find(item => item.id === product.id);
    }
    return (
        <>
            <li className={style.menu__item}>
                <div className={style.menu__title}>{title}</div>
                <img className={style.menu__img} src={url} alt="Cesar salad"></img>
                <div className={style.menu__category}>Category: <span>{category}</span></div>
                <div className={style.menu__price}>Price: <span>{price}$</span></div>
                
                {
                    isInCart(menuItem) && 
                    <button className={style.menu__btn} onClick={()=>onAddToCart()}>Add more</button>
                }

                {
                    !isInCart(menuItem) && 
                    
                    <button className={style.menu__btn} onClick={()=>onAddToCart()}>Add to cart</button>
                   
                }
               
                
            </li>
        </>
    )
}

export default MenuListItem;