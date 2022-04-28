import React from "react";
import { Route,Routes } from "react-router-dom";

// Layout
import RestaurantLayout from "../Layout/Restaurant.layout";

const RestaurantLayoutHOC = ({ component: Component, ...rest }) => {

    const WrapRestaurantlayout=(props)=>{
        return(
            <>
            <RestaurantLayout>
            <Component {...props} />
          </RestaurantLayout>
            </>
        )
       
    }
    
    
  return (
    <>
    <Routes>
    <Route  {...rest} element={<WrapRestaurantlayout/>} />
    </Routes>
      
    </>
  );
};

export default RestaurantLayoutHOC;