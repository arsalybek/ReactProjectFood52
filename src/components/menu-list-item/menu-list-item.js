import React from 'react';
import './menu-list-item.css';

const MenuListItem = ({menuItem,onAddToCart,cartItems}) => {
    const {title,price,url,category} = menuItem
    const isInCart = product => {
        return !!cartItems.find(item => item.id === product.id);
    }
    return (
        <>
            <li className="menu__item">
                <div className="menu__title">{title}</div>
                <img className="menu__img" src={url} alt="Cesar salad"></img>
                <div className="menu__category">Category: <span>{category}</span></div>
                <div className="menu__price">Price: <span>{price}$</span></div>
                
                {
                    isInCart(menuItem) && 
                    <button className="menu__btn" onClick={()=>onAddToCart()}>Add more</button>
                }

                {
                    !isInCart(menuItem) && 
                    
                    <button className="menu__btn" onClick={()=>onAddToCart()}>Add to cart</button>
                   
                }
               
                
            </li>
        </>
    )
}

export default MenuListItem;