// import React, { Fragment } from 'react';

// const Spinner = () => {
//     return <div className="spinner">loading...</div>
// }

// export default Spinner;


import React, { Fragment, ReactElement} from "react";
interface Props {
  loading?: boolean;
  error?: any;
}


export default function Spinner(){
  

return (
    <Fragment>
      Loading...
    </Fragment>
  )
}
 
