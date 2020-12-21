import React, { ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Logged } from "../enums/Logged";

export default function Redux(): ReactElement {
  
  const logged = useSelector((state: any) => state.isLogged);

  const dispatch = useDispatch();

  return (
    <div>
      {logged ? (
        <button onClick={() => dispatch({ type: Logged.SIGN_OUT })}>
          Sign Out
        </button>
      ) : (
        <button onClick={() => dispatch({ type: Logged.SIGN_IN })}>
          Sign In
        </button>
      )}

      {/* {logged ? <div> Secret Infromation between you and me</div> : ""} */}
    </div>
  );
}
