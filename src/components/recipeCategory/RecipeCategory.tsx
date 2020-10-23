import React, { ReactElement, Component } from 'react';
import { Link } from 'react-router-dom';
import { RecipeCategoryModel } from '../../models/RecipeCategory';
import './recipeCategory.css'

interface Props {
    foodCategoryList: RecipeCategoryModel[];
}
interface State {
    filtered: RecipeCategoryModel[];
    searchTxt: string
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
        <div className="content">
        <span id="theme">WHAT WE'RE COOKING NOW</span>
        <hr></hr>
        </div>
        
        <div className="search-container">
          <div className="searchbar">
            <label htmlFor="search-input" className="search-icon-wrapper">
              <div className="search-icon"></div>
            </label>
              <input type="search" className="search-input" id="search-input" placeholder="Search recipes and more..." 
                      onChange={this.handleChange}/>
                </div>
            </div>

        <div className="food-category">
            {this.state.filtered.map((category) => {
                    return <div>
                        <Link to={`/${category.title}`}>
                        <img src = {category.image}/>
                        <button className="btn">{category.title}</button>
                        </Link>
                        </div>
                })}
        </div>
        </>
        )
    }
}

