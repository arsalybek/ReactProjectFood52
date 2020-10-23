import React, { ReactElement, useEffect, useState, useRef, createRef } from 'react'
import { recipeList, RecipeModel } from '../../models/Recipe'
import attachRecipeListToCategory from './attachRecipeListToCategory';
import './recipes.css'

interface Props {
    curRecipeList: RecipeModel[]; 
}

function ChickenRecipesList({curRecipeList}: Props): ReactElement {
    const [filteredList, setState] = useState(curRecipeList);

    const [curSearch, setSearchTxt] = useState('')
    const prevSearch = useRef('')
    const inputRef = createRef<HTMLInputElement>()
    
    useEffect(() => {
        prevSearch.current = curSearch
    }, [curSearch]) 

      function handleChange(e: any) {
        
        let currentList :RecipeModel[] | undefined =[];
        let newList:RecipeModel[]=[];
        if(e.target.value!==""){
          currentList= curRecipeList
          newList=currentList.filter(item => {
            const lc=item.name;
            const filter=e.target.value;
            setSearchTxt(txt => filter)
            return lc.includes(filter)
          })
          console.log(newList.length)
        }
        else
            newList=curRecipeList
        
        setState(filteredList => newList)
        console.log("List" + filteredList.length)
    } 

    return (
        <>
        <div className="searchbar">
        <label htmlFor="search-input" className="search-icon-wrapper">
        <div className="search-icon"></div>
        </label>
        <input  type="search" className="search-input" id="search-input" placeholder="Search recipes and more..." 
        ref ={inputRef} onChange={handleChange}/>
        </div>
        <span className="previous-search">{prevSearch.current}</span>
        <div className="recipe-div">
            {
            filteredList?.map((recipe) => (
                <div className="recipe-li">
                    <img className="recipe-img"src={recipe.image}/>
                    <h1 className="recipe-name">{recipe.name}</h1>
                    <span className="recipe-span">by {recipe.author}</span>
                </div>
                ))
            }
        </div>
        </>
    )
}

export default attachRecipeListToCategory({
    categoryId: 3,
  })(ChickenRecipesList);
  
