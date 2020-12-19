import React from 'react'

import RestoServiceContext from '../resto-service-context'
//двойная вложенность
const WithRestoService =()=>(Wrapped)=>{
    return(props)=>{
        return(
            <RestoServiceContext.Consumer>
                {
                    (RestoService)=>{
                        return <Wrapped {...props} RestoService = {RestoService}/>
                    }
                }
            </RestoServiceContext.Consumer>
        )
    }
}

export default WithRestoService;

