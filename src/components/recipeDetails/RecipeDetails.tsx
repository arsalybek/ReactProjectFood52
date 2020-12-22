/** @format */

import React, { ReactElement, useState, useMemo, useEffect, useCallback, useReducer } from "react";
import axios from "axios";
import { useRouteMatch } from "react-router-dom";
import { recipeList, RecipeModel } from "../../models/Recipe";
import styles from "./details.module.css";
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
  const [comments, setComments] = useState<string[]>([]);
  const [commentValue, setCommentValue] = useState("");

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
          <div className={styles.itemHeader}>
            <h1 className={styles.itemTitle}>{item.name}</h1>
            <h6 className={styles.itemInfo}>
              <span className={styles.aftHeader}>by: {item.author}</span> |
              <span className={styles.aftHeader}>{item.date} </span>|
              <span className={styles.aftHeader}>&#8902;&#8902;&#8902;{item.review_count}</span> Reviews
            </h6>
            <h6>{new Date(state).getFullYear()}</h6>
          </div>
          <div className={styles.split}>
            <div className={styles.left}>
              <img className={styles["img-id"]} src={item.image} alt="" />
            </div>
            <div className={styles.right}>
              <div className={styles.inner}>
                <div className={styles.innerText}>
                  <div className={styles.servTitle}>Prep time</div> {item.prep_time}
                </div>
                <div className={styles.innerText}>
                  <div className={styles.servTitle}>Cook time</div>
                  {item.cook_time}
                </div>
                <div className={styles.innerText}>
                  <div className={styles.servTitle}>Serves</div>
                  {item.serves}
                </div>
              </div>
              <div className={styles.notesText}>{item.notes}</div>
            </div>
          </div>
          <div className={styles.email}>
            <div className={styles.emailInner}>
              <div className={styles.emailTextFirst}>
                <strong>
                  <h2>Want more Food52?</h2>
                </strong>
              </div>
              <div className={styles.emailTextLast}>
                <h4>
                  Our best tips for eating thoughtfully and <br />
                  living joyfully, right to your inbox.
                </h4>
              </div>
              <div className={styles.formsText}>
                <form onSubmit={handleSubmit}>
                  <input
                    ref={inputRef}
                    value={email}
                    onChange={handleEmailChange}
                    className={styles.mailInput}
                    type="text"
                    placeholder="hello@food52.com"
                  />
                  <button className={styles["btn-email"]} type="submit">
                    I'm in
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className={styles.comment}>
            <div className={styles.commentReview}>&#x1f4ac; {comments.length} REVIEWS</div>
            {comments.map((c, index) => (
              <div className={styles["comment-item"]}>{index + 1}. {c}</div>
            ))}
            <div>
              <textarea
                className={styles.commentArea}
                placeholder="Leave a Review"
                onChange={(e) => setCommentValue(e.target.value)}
              >
              {commentValue}
              </textarea>
            </div>
            <div>
              <button
                className={styles.btnReview}
                onClick={() => {
                  setCommentValue("");
                  comments.push(commentValue);
                }}
              >
                SUBMIT REVIEW
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
