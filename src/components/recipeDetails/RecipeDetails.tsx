import React, { ReactElement, useState, useMemo, useEffect, useCallback, useReducer } from "react";
import axios from "axios";
import { useRouteMatch } from "react-router-dom";
import { recipeList, RecipeModel } from "../../models/Recipe";
import style from "./details.module.css";
interface Props {}

interface Action {
  type: string;
  payload: string;
}

const reducer = (state = "", action: Action) => {
  switch (action.type) {
    case "CHANGE_TIME": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default function RecipeDetails({}: Props): ReactElement {
  const [item, setItem] = useState<RecipeModel | null>(null);
  const [state, dispatch] = useReducer(reducer, "");
  const [email, setEmail] = useState("");

  const inputRef = React.useRef<HTMLInputElement>(null);
  const match = useRouteMatch<{ id: string }>();

  const getItemByID = useMemo(() => {
    return recipeList.find((recipe) => recipe.id.toString() === match.params.id) || recipeList[0];
  }, [match.params.id]);

  useEffect(() => {
    window.scrollTo(0, 0);

    const getTime = async () => {
      await axios
        .get("http://worldclockapi.com/api/json/est/now")
        .then((res) => dispatch({ type: "CHANGE_TIME", payload: res.data.currentDateTime }));
    };

    getTime();

    const item = getItemByID;
    setItem(item);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    console.log(inputRef.current?.value);
  };

  const handleEmailChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.currentTarget.value);
    },
    [setEmail]
  );

  return (
    <>
      {item && (
        <div>
          <div className={style.itemHeader}>
            <h1 className={style.itemTitle}>{item.name}</h1>
            <h6 className={style.itemInfo}>
              <span className={style.aftHeader}>by: {item.author}</span> |
              <span className={style.aftHeader}>{item.date} </span>|
              <span className={style.aftHeader}>&#8902;&#8902;&#8902;{item.review_count}</span> Reviews
            </h6>
            <h6>{new Date(state).getFullYear()}</h6>
          </div>
          <div className={style.split}>
            <div className={style.left}>
              <img className={style["img-id"]} src={item.image} alt="" />
            </div>
            <div className={style.right}>
              <div className={style.inner}>
                <div className={style.innerText}>
                  <div className={style.servTitle}>Prep time</div> {item.prep_time}
                </div>
                <div className={style.innerText}>
                  <div className={style.servTitle}>Cook time</div>
                  {item.cook_time}
                </div>
                <div className={style.innerText}>
                  <div className={style.servTitle}>Serves</div>
                  {item.serves}
                </div>
              </div>
              <div className={style.notesText}>{item.notes}</div>
            </div>
          </div>
          <div className={style.email}>
            <div className={style.emailInner}>
              <div className={style.emailTextFirst}>
                <strong>
                  <h2>Want more Food52?</h2>
                </strong>
              </div>
              <div className={style.emailTextLast}>
                <h4>
                  Our best tips for eating thoughtfully and <br />
                  living joyfully, right to your inbox.
                </h4>
              </div>
              <div>
                <form onSubmit={handleSubmit}>
                  <input
                    ref={inputRef}
                    value={email}
                    onChange={handleEmailChange}
                    className={style.mailInput}
                    type="text"
                    placeholder="hello@food52.com"
                  />
                  <button className={style["btn-email"]} type="submit">
                    I'm in
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className={style.comment}>
            <div className={style.commentReview}>&#x1f4ac; {item.review_count} REVIEWS</div>
            <div>
              <textarea className={style.commentArea} placeholder="Leave a Review"></textarea>
            </div>
            <div>
              <button className={style.btnReview}>SUBMIT REVIEW</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
