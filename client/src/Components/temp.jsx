import React from "react";
import { useLocation } from "react-router-dom";
const Temp =()=>{
    const loc= useLocation()
    return <div>
        
        <h1>hello temp</h1>
        <p>{loc.pathname}</p>

    </div>
}

export default Temp
