import { Route, Navigate, Routes } from "react-router-dom";

// HOC
import HomeLayoutHOC from "./HOC/Home.Hoc";
import RestaurantLayoutHOC from "./HOC/Restaurant.HOC";

// Component
import Temp from "./Components/temp";
import Master from "./Components/master";

// pages
import Home from "./Page/Home";
import Overview from "./Page/Restaurant/Overview";
import Reviews from "./Page/Restaurant/Reviews";
import OrderOnline from "./Page/Restaurant/OrderOnline";
import Menu from "./Page/Restaurant/Menu";
import Photos from "./Page/Restaurant/Photos";

function App() {
  return (
    <>
      <Routes>
      <Route path="/" exact element={<Navigate to="/delivery"  replace={true}/>}/>
      
      </Routes>


      <Routes>
      <Route path="/restaurant/:id" exact element={<Navigate to="/restaurant/:id/overview"  replace={true}/>}/>
      </Routes>
     

      <HomeLayoutHOC path="/:type" exact component={Home} />
      {/*<HomeLayoutHOC path="/" exact component={Temp} />*/}
      <RestaurantLayoutHOC
        path="/restaurant/:id/overview"
        exact
        component={Overview}
      />
      <RestaurantLayoutHOC
        path="/restaurant/:id/order-online"
        exact
        component={OrderOnline}
      />
      <RestaurantLayoutHOC path="/restaurant/:id/menu" 
      exact 
      component={Menu} 
      />
      <RestaurantLayoutHOC
        path="/restaurant/:id/reviews"
        exact
        component={Reviews}
      />
      <RestaurantLayoutHOC
        path="/restaurant/:id/photos"
        exact
        component={Photos}
      />

    </>
  );
}
export default App;