import React, { createRef, ReactElement, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { RecipeModel } from '../../models/Recipe';
import attachRecipeListToCategory from './attachRecipeListToCategory';
import style from './recipes.module.css';

interface Props {
    curRecipeList: RecipeModel[];
}

function SaladRecipesList({ curRecipeList}: Props): ReactElement {
    const [filteredList, setState] = useState(curRecipeList);

    const [curSearch, setSearchTxt] = useState('')
    const prevSearch = useRef('')
    const inputRef = createRef<HTMLInputElement>()

    useEffect(() => {
        prevSearch.current = curSearch
    }, [curSearch])

    function handleChange(e: any) {

        let currentList: RecipeModel[] | undefined = [];
        let newList: RecipeModel[] = [];
        if (e.target.value !== "") {
            currentList = curRecipeList
            newList = currentList.filter(item => {
                const lc = item.name;
                const filter = e.target.value;
                setSearchTxt(txt => filter)
                return lc.includes(filter)
            })
            console.log(newList.length)
        }
        else
            newList = curRecipeList

        setState(filteredList => newList)
        console.log("List" + filteredList.length)
    }

    return (
        <>
            <div className={style.searchbar}>
                <label htmlFor="search-input" className={style.search_icon_wrapper}>
                    <div className={style.search_icon}></div>
                </label>
                <input type="search" className={style.search_input} placeholder="Search recipes and more..."
                    ref={inputRef} onChange={handleChange} />
            </div>
            <span className={style.previous_search}>{prevSearch.current}</span>
            <div className={style.recipe_div}>
                {
                    filteredList?.map((recipe) => (
                        <Link key={recipe.id} to={'/details/' + recipe.id}>
                            <div className={style.recipe_li}>
                                <img className={style.recipe_img} src={recipe.image} />
                                <h1 className={style.recipe_name}>{recipe.name}</h1>
                                <div>
                                <span className={style.recipe_span}>by {recipe.author}</span>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </>
    )
}

export default attachRecipeListToCategory({
    fetchUrl: "/recipeList",
    categoryId: 2,
})(SaladRecipesList)

