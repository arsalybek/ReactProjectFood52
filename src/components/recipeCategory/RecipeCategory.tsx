import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { RecipeCategoryModel } from '../../models/RecipeCategory';
import style from './recipeCategory.module.css';
import Cart from './Cart';

interface State {
    filtered: RecipeCategoryModel[];
    searchTxt: string
}
interface Props {
  foodCategoryList: RecipeCategoryModel[];
}
export default class RecipeCategory extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state={
          filtered: [],
          searchTxt: ''
        }
        this.handleChange=this.handleChange.bind(this);
      }
      
      componentDidMount() {
        this.setState({
          filtered: this.props.foodCategoryList
        })
      }
    
      componentWillReceiveProps(nextProps: Props) {
        this.setState({
          filtered: nextProps.foodCategoryList
        })
      }

      handleChange(e: any) {
        let currentList=[];
        let newList=[];
        if(e.target.value!=="")
        {
          currentList=this.props.foodCategoryList
          newList=currentList.filter(item => {
            const lc=item.title;
            const filter=e.target.value.toLowerCase();
            return lc.includes(filter)
          })
        } else
        {
          newList=this.props.foodCategoryList
        }
        this.setState({
          filtered: newList
        })
      }
    

    render() {
        return (
            <>
        <div className={style.content}>
        <span className={style.theme}>WHAT WE'RE COOKING NOW</span>
        <hr className={style.hr}></hr>
        </div>
        
        <div className={style.search_container}>
          <div className={style.searchbar}>
            <label htmlFor="search-input" className={style.search_icon_wrapper}>
              <div className={style.search_icon}></div>
            </label>
              <input type="search" className={style.search_input}  placeholder="Search recipes and more..." 
                      onChange={this.handleChange}/>
                </div>
            </div>

        <div className={style.food_category}>
            {this.state.filtered.map((category) => {
                    return <div>
                        <Link to={`/${category.title}`}>
                        <img src = {category.image}/>
                        <button className={style.btn}>{category.title}</button>
                        </Link>
                        </div>
                })}
        </div>
        </>
        )
    }
}

