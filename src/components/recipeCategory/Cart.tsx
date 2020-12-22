import * as React from 'react';
import * as actions from '../../store/actionCreators';
import { connect } from 'react-redux';
import {Dispatch} from 'redux';
import { AddProduct, AppState, RecipeCartLine, RemoveProduct } from "../../store/actionTypes";
import { RecipeCategoryModel } from '../../models/RecipeCategory';
import { ShopModel } from '../../models/Shop';
import style from '../shop/shop.module.css'

export interface Props {
  list: RecipeCartLine[];
}

class Cart extends React.Component<Props, {}> {
  render() {
    return (
      <div>
        <span className={style.cnt_items}>Items in Favourites: {this.props.list.length}</span>
        <ul>
          {this.props.list.map((line, index) => {
            return (
              <div className={style.container_for}>            
                <ul className={style.catalog}>            
                    <li className={style.recipe_li} key={line.product.id}>
                        <img className={style.card__image} src={line.product.image} alt="test"/>
                        <div className={style.card__description}>
                            <h3 className={style.card__header}>{line.product.name}</h3>
                            <div className={style.card__price}>{line.product.price} $</div>
                            <div className={style.card__price}>Rewiew: {line.product.review_count}
                            <div className={style.rating}>
                            <div className={style.clip_star}></div>
                            <div className={style.clip_star}></div>
                            <div className={style.clip_star}></div>
                            <div className={style.clip_star}></div>
                            <div className={style.clip_star}></div>
                            </div>                 
                            </div>
                        </div></li>
                        </ul>
            </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export function mapStateToProps(state: AppState) {
  return {
    list: state.likedRecipes,
  };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.AppAction>) {
  return {
    increment: (product: ShopModel): AddProduct => dispatch(actions.addProduct(product)),
    decrement: (product: ShopModel): RemoveProduct => dispatch(actions.removeProduct(product)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
