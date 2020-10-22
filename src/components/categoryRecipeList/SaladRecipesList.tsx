import React, { ReactElement, useState } from 'react'
import { RecipeModel } from '../../models/Recipe'
import attachRecipeListToCategory from './attachRecipeListToCategory';

interface Props {
    curRecipeList?: RecipeModel[]; 
    btnImg?: string
}

function SaladRecipesList(props: Props): ReactElement {
    const [checked, setImage] = useState(props.btnImg);
    return (
        <div>
            <ul>
                {
                    props.curRecipeList?.map((recipe) => (
                        <li>
                            <h1>{recipe.name}</h1>
                            {/* <img src="https://www.flaticon.com/svg/static/icons/svg/25/25353.svg"/> */}
                            <button onClick={() => setImage(prevImage => "https://www.flaticon.com/svg/static/icons/svg/25/25353.svg")}><img src=""/></button>
                        </li>
                        
                    ))
                }
            </ul>
        </div>
    )
}

export default attachRecipeListToCategory({
    categoryId: 2,
  })(SaladRecipesList );
  
