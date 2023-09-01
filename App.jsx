import React from "react";
import Menu from "./component/Menu";
import Bills from "./component2/Bills";
import History from "./component2/History";
import Order from "./component2/Order";
import Dash from "./component2/Dash"
import { Route,Routes } from "react-router-dom";

// import Photo from "./test/Photo";

function App() {
  return (
   <>
   
   <Menu/>


   <Routes>
     <Route path="/" Component={Dash}/> 
    <Route path="/bills" Component={Bills}/>
    <Route path="/history" Component={History}/>
    <Route path="/order" Component={Order}/>
   </Routes>
   </>
  );
}

export default App;
