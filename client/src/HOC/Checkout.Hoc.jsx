import React from "react";
import { Route, Routes } from "react-router-dom";

// Layout
import CheckoutLayout from "../Layout/Checkout.layout";

const CheckoutLayoutHOC = ({ component: Component, ...rest }) => {
    const WrapCheckoutlayout=(props)=>{
        return(
            <>
          <CheckoutLayout>
            <Component {...props} />
          </CheckoutLayout>
            </>
        )
       
    }

  return (
    <>
    <Routes>
        <Route  {...rest} element={<WrapCheckoutlayout/>} />
    </Routes>
     
    </>
  );
};

export default CheckoutLayoutHOC;