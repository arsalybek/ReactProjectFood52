import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { RecipeCategoryModel } from '../../models/RecipeCategory';
import './recipeCategory.css'

interface Props {
    foodCategoryList: RecipeCategoryModel[];
}

export default function RecipeCategory({foodCategoryList}: Props): ReactElement {
    return (
        <>
        <div className="content">
        <span id="theme">WHAT WE'RE COOKING NOW</span>
        <hr></hr>
        </div>
        
        < div className="food-category">
            {
                foodCategoryList.map((category) => {
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
