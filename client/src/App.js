import { Route, Navigate, Routes } from "react-router-dom";

// HOC
import HomeLayoutHOC from "./HOC/Home.Hoc";
import RestaurantLayoutHOC from "./HOC/Restaurant.HOC";

// Component
import Temp from "./Components/temp";
import Master from "./Components/master";

// pages
import Home from "./Page/Home";

function App() {
  return (
    <>
      <Routes>
      <Route path="/" exact element={<Navigate to="/delivery"  replace={true}/>}/>
      
      </Routes>
     
      <HomeLayoutHOC path="/:type" exact component={Home} />
      {/*<HomeLayoutHOC path="/" exact component={Temp} />*/}
      <RestaurantLayoutHOC path="/restaurant/:id" exact component={Temp} />
    </>
  );
}
export default App;