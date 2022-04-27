import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomeLayout from "../Layout/Home.layout";


const HomeLayoutHOC=({component:Component,...rest})=>{
//components,path,exact

//const Component=component

const WrapHomelayout=(props)=>{
    return(
        <>
        <HomeLayout>
        <Component {...props}/>
        </HomeLayout>
        </>
    )
   
}


    return (
    
    <>
    
    <Routes>
        
        <Route {...rest} element={ <WrapHomelayout/>} />

     </Routes>

    </>
    
    )
}

export default HomeLayoutHOC;