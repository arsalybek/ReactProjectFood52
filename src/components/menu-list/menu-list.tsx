// import React, { ReactElement, useEffect, useState, useRef, createRef } from 'react'
// import { Link } from 'react-router-dom';
// import { menuList, MenuModel } from '../../models/food'
// import attachRecipeListToCategory from './attachList';
// import style from './menu-list-item.module.css'

// interface Props {
//     curRecipeList: MenuModel[]; 
// }

// function ChickenRecipesList({curRecipeList}: Props): ReactElement {
//     const [filteredList, setState] = useState(curRecipeList);

//     const [curSearch, setSearchTxt] = useState('')
//     const prevSearch = useRef('')
//     const inputRef = createRef<HTMLInputElement>()
    
//     useEffect(() => {
//         prevSearch.current = curSearch
//     }, [curSearch]) 

//       function handleChange(e: any) {
        
//         let currentList :MenuModel[] | undefined =[];
//         let newList:MenuModel[]=[];
//         if(e.target.value!==""){
//           currentList= curRecipeList
//           newList=currentList.filter(item => {
//             const lc=item.title;
//             const filter=e.target.value;
//             setSearchTxt(txt => filter)
//             return lc.includes(filter)
//           })
//           console.log(newList.length)
//         }
//         else
//             newList=curRecipeList
        
//         setState(filteredList => newList)
//         console.log("List" + filteredList.length)
//     } 

//     return (
//         <>
//         <div className="searchbar">
//         <label htmlFor="search-input" className="search-icon-wrapper">
//         <div className="search-icon"></div>
//         </label>
//         <input  type="search" className="search-input" id="search-input" placeholder="Search recipes and more..." 
//         ref ={inputRef} onChange={handleChange}/>
//         </div>
//         <span className="previous-search">{prevSearch.current}</span>
//         <div className="recipe-div">
//         <ul>
//         <li className={style.menu__item}>
//                 <div className={style.menu__title}>{title}</div>
//                 <img className={style.menu__img} src={url} alt="Cesar salad"></img>
//                 <div className={style.menu__category}>Category: <span>{category}</span></div>
//                 <div className={style.menu__price}>Price: <span>{price}$</span></div>
                
//                 {
//                     isInCart(menuItem) && 
//                     <button className={style.menu__btn} onClick={()=>onAddToCart()}>Add more</button>
//                 }

//                 {
//                     !isInCart(menuItem) && 
                    
//                     <button className={style.menu__btn} onClick={()=>onAddToCart()}>Add to cart</button>
                   
//                 }
               
                
//             </li>
//         </ul>
        
//             {/* {
//             filteredList?.map((recipe) => (
//                 <Link key={recipe.id} to={'/details/' + recipe.id}>
//                 <div className="recipe-li">
//                     <img className="recipe-img"src={recipe.image}/>
//                     <h1 className="recipe-name">{recipe.name}</h1>
//                     <span className="recipe-span">by {recipe.author}</span>
//                 </div>
//                 </Link>
//                 ))
//             } */}
//         </div>
        
//         </>
//     )
// }

// export default attachRecipeListToCategory({
//     categoryId: 3,
//   })(ChickenRecipesList);
  
import React, { ReactElement, useEffect, useState, useRef, createRef } from 'react'
import { Link } from 'react-router-dom';
import { menuList, MenuModel } from '../../models/food'
import attachRecipeListToCategory from './attachList';
import style from './recipes.module.css'
  
  interface Props {
      curRecipeList: MenuModel[];
  }
  
  function MenuRecipesList({ curRecipeList }: Props): ReactElement {
      const [filteredList, setState] = useState(curRecipeList);
  
      const [curSearch, setSearchTxt] = useState('')
      const prevSearch = useRef('')
      const inputRef = createRef<HTMLInputElement>()
  
      useEffect(() => {
          prevSearch.current = curSearch
      }, [curSearch])
  
      function handleChange(e: any) {
          let currentList: MenuModel[] | undefined = [];
          let newList: MenuModel[] = [];
          if (e.target.value !== "") {
              currentList = curRecipeList
              newList = currentList.filter(item => {
                  const lc = item.title;
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
                                  <img className={style.recipe_img} src={recipe.url} />
                                  <h1 className={style.recipe_name}>{recipe.title}</h1>
                                  <span className={style.recipe_span}>by {recipe.price}</span>
                              </div>
                          </Link>
                      ))
                  }
              </div>
          </>
      )
  }
  
  export default attachRecipeListToCategory({
      categoryId: 3,
      fetchUrl: "/menu"
  })(MenuRecipesList);