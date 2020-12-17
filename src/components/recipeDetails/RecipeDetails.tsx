import React, { ReactElement, useState, useRef, useEffect} from 'react';
import { useRouteMatch } from 'react-router-dom';
import { recipeList, RecipeModel } from '../../models/Recipe';
import './details.css'
interface Props {
}

export default function RecipeDetails({}: Props): ReactElement {

    useEffect(() => {
        window.scrollTo(0, 0)
    })

    const [email, setEmail] = useState("")
    const inputRef = React.useRef<HTMLInputElement>(null)
    const match = useRouteMatch<{ id: string }>();
    const item = (recipeList.find(recipe => recipe.id.toString() === match.params.id) || recipeList[0]) ;

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
      ): Promise<void> => {
        e.preventDefault();

        console.log(inputRef.current?.value)
      };
    return (
            <div>
                <div className="itemHeader">
                    <h1 className="itemTitle">{item.name}</h1>
                    <h6 className="itemInfo">
                        <span className="aftHeader">by: {item.author}</span> | 
                        <span className="aftHeader">{item.date} </span>|
                        <span className="aftHeader">&#8902;&#8902;&#8902;{item.review_count}</span> Reviews
                    </h6>
                </div>
                <div className="split">
                    <div id="left">
                        <img id ="img-id" src={item.image} alt=""/>
                    </div>
                    <div id="right">
                       <div className="inner">
                    
                            <div className="innerText">
                                <div className="servTitle">Prep time</div> {item.prep_time}
                            </div>
                            <div className="innerText">
                                <div className="servTitle">Cook time</div>{item.cook_time}
                            </div>
                            <div className="innerText">
                                <div className="servTitle">Serves</div>{item.serves}
                            </div>
                            
                       </div>
                       <div className="notesText">
                            {item.notes}
                       </div>
                    </div>
                 </div>
                 <div className="email">
                    <div className="emailInner">
                       <div className="emailTextFirst">
                        <strong><h2>Want more Food52?</h2></strong>
                        </div> 
                        <div className="emailTextlast">
                        <h4>Our best tips for eating thoughtfully and <br/> 
                        living joyfully, right to your inbox.</h4>
                        </div>
                        <div>
                            <form onSubmit={handleSubmit}>
                                <input ref={inputRef} className="mailInput" type="text" placeholder="hello@food52.com"/>
                                <button className="btn-email" type="submit">I'm in</button>
                            </form>

                        </div>
                    </div>
                 </div>
                 <div id="comment">
                     <div className="commentReview">
                     &#x1f4ac; {item.review_count} REVIEWS
                     </div>
                     <div>
                     <textarea className="commetArea" placeholder="Leave a Review">
                    </textarea>
                     </div>
                     <div>
                         <button className="btnReview">SUBMIT REVIEW</button>
                     </div>
                 </div>
            </div>

        );
    }