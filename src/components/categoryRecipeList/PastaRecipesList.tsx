import React, { ReactElement } from 'react'
import { RecipeModel } from '../../models/Recipe'
import attachRecipeListToCategory from './attachRecipeListToCategory';

interface Props {
    curRecipeList?: RecipeModel[]; 
}

function PastaRecipesList({curRecipeList}: Props): ReactElement {

    return (
        <ul>
            {
                curRecipeList?.map((recipe) => (
                    <li><h1>{recipe.name}</h1></li>
                    ))
            }
        </ul>
    )
}

export default attachRecipeListToCategory({
    categoryId: 1,
  })(PastaRecipesList);
  
