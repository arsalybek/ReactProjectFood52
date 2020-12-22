import React, { ReactElement, useEffect, useMemo, useState } from "react";
import Modal from "./Modal";

export default function MemoExample(): ReactElement {
  
  const [dark, setDark] = useState(false);
  const [isAuthed, setIsAuthed] = useState(false);

 

  const themeStyle = useMemo(() => {
    return {
      backgroundColor: dark ? "red" : "white",
      color: dark ? "white" : "black",
      zIndex: 2,
      width: "100%",
    };
  }, [dark]);

  useEffect(() => {
    console.log("Theme Changed");
  }, [themeStyle]);

  return (
    <>
      <div style={{ zIndex: 1 }} onClick={() => console.log("clicked")}>
       
        <button
          onClick={() => {
            setDark((prevDark) => !prevDark);
            setIsAuthed(true);
          }}
        >
          Sign in
        </button>
        <Modal isAuthed={isAuthed} onClose={() => setIsAuthed(false)}>
          Sign out
        </Modal>
      </div>
    </>
  );

 
}
