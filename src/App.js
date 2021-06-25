import Layout from "./Components/LayoutComponent/Layout";
import { faPlus, faSort } from "@fortawesome/free-solid-svg-icons"
import { Route, Switch } from "react-router-dom";
import "./App.css";
import React, { Suspense, useState } from "react";
import AddButton from './Components/UIComponent/Button/AddButton'
import BackDrop  from "./Components/UIComponent/BackDrop/BackDrop";
import FormModal from "./Components/UIComponent/FormModal/FormModal";
import {hide,show} from './Store/modal'
import {sortPrice,sortQuantity} from './Store/products'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Home = React.lazy(() => import("./Components/Home/Home"));
const Login = React.lazy(() => import("./Components/Login/Login"));

function App() {
  const showModal = useSelector(state=>state.modal.show)
  const isAuth = useSelector(state=>state.authenticate.isAuth)
  const products = useSelector(state=>state.products.products)
  const dispatch = useDispatch();
  const [sortToggle,setSortToggle] = useState(true);
  const addProductHandler = ()=>{
      if(!isAuth)
      {
        window.alert("please LogIn first to add product !!!")
        return
      }
      dispatch(show('add-product'))

  }

  const sortPriceHandler = ()=>{
      dispatch(sortPrice(sortToggle))
      setSortToggle(prev=>!prev)
  }

  const sortQuantityHandler = ()=>{
    dispatch(sortQuantity(sortToggle))
    setSortToggle(prev=>!prev)
}
  return (
    <div className="App">
      <AddButton onClick = {addProductHandler} top = "75px" icon = {faPlus}>Add Product</AddButton>
      {products.length!==0&&<AddButton onClick = {sortPriceHandler} top = "140px" icon = {faSort}>Sort Price</AddButton>}
      {products.length!==0&&<AddButton onClick = {sortQuantityHandler} top = "206px" icon = {faSort}>Sort Quantity</AddButton>}
      {showModal&&<BackDrop onClick={()=>{dispatch(hide())}}><FormModal></FormModal></BackDrop>}
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Suspense fallback={<div>Loading...</div>}>
              <Home></Home>
            </Suspense>
          </Route>
          <Route path="/login">
            <Suspense fallback={<div>Loading...</div>}>
              <Login></Login>
            </Suspense>
          </Route>
          {/* <Redirect to="/"></Redirect> */}
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
