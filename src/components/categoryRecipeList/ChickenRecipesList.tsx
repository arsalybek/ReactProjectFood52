import React, { ReactElement } from 'react'
import { RecipeModel } from '../../models/Recipe'
import attachRecipeListToCategory from './attachRecipeListToCategory';

interface Props {
    curRecipeList?: RecipeModel[]; 
}

function ChickenRecipesList({curRecipeList}: Props): ReactElement {

    return (
        <div>
            <ul>
                {
                    curRecipeList?.map((recipe) => (
                        <li><h1>{recipe.name}</h1></li>
                    ))
                }
            </ul>
        </div>
    )
}

export default attachRecipeListToCategory({
    categoryId: 3,
  })(ChickenRecipesList);
  
