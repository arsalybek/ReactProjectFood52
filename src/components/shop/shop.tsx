import React, { ReactElement, useMemo } from 'react'
import { ShopModel } from '../../models/Shop'
import style from './shop.module.css'
import * as actions from '../../store/actionCreators';
import { AddProduct, AppState, RecipeCartLine, RemoveProduct } from '../../store/actionTypes';
import { connect} from 'react-redux';
import {Dispatch} from 'redux'
import { RecipeModel } from '../../models/Recipe';

interface Props {
   shopList: ShopModel[];
   allRecipes: ShopModel[];
   likedRecipes: RecipeCartLine[];
   addProduct: (product: ShopModel) => AddProduct;
   removeProduct: (product: ShopModel) => RemoveProduct;
 }
 
 export function mapStateToProps(state: AppState) {
   return {
     allRecipes: state.allRecipes,
     likedRecipes: state.likedRecipes,
   };
 }
 

export function Shop(props: Props): ReactElement {
    
    let data = useMemo(() => props.shopList.map((product)=>{
        console.log("use Memo")
        return <div className={style.container_for}>            
            <ul className={style.catalog}>            
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
					</div>
                    <span>{!isInCart(product) ? <button onClick={() => props.addProduct(product)}>Добавить в корзину</button> : <button onClick={() => props.removeProduct(product)}>Удалить с корзины</button>}</span>
                    </li>
                    </ul>
        </div>
    }), [props.shopList])
    
    function isInCart(item: ShopModel) {
        return !!props.likedRecipes.find((line) => line.product === item);
    }

    return (
        <>            
        <div className="content">
        <span className={style.shop_title}>OUR BESTSELLERS</span>
        <div id="main-header__menu" className="main-header__menu">           
		</div>
        </div>
         <div className={style.container2}>
         {/* <div>{data}</div> */}
         </div>
            {props.shopList.map((product) => {
                return<div className={style.container_for}>            
                <ul className={style.catalog}>            
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
                        </div>
                        <span>{!isInCart(product) ? <button className={style.fav_btn} onClick={() => props.addProduct(product)}>Add to favorites</button> : <button className={style.fav_btn} onClick={() => props.removeProduct(product)}>Remove from favorites</button>}</span>
                        </li>
                        </ul>
            </div>
            })
            }
                       
     </>	    
    );
    }
    export function mapDispatchToProps(dispatch: Dispatch<actions.AppAction>) {
        return {
          addProduct: (product: ShopModel): AddProduct => dispatch(actions.addProduct(product)),
          removeProduct: (product: ShopModel): RemoveProduct => dispatch(actions.removeProduct(product)),
        };
      }
      
      export default connect(mapStateToProps, mapDispatchToProps)(Shop);