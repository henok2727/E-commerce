import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Route, RouterProvider, createRoutesFromElements } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.js"

//component
import PrivateRoute from "./components/PrivateRoute.jsx";

//Auth
import Login from "./page/Auth/Login.jsx"
import Register from "./page/Auth/Register.jsx";
import Profile from "./page/User/Profile.jsx";
//admin
import AdminRoute from "./page/Admin/AdminRoute.jsx";
import UserList from "./page/Admin/UserList.jsx";
import CategoryList from "./page/Admin/CategoryList.jsx";
import ProductList from "./page/Admin/ProductList.jsx";
import ProductUpdate from "./page/Admin/ProductUpdate.jsx";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} >

    <Route path="/login" element ={<Login />} />
    <Route path="/register" element ={<Register />} />
      <Route path="" element ={<PrivateRoute />} >
        <Route path="/profile" element={<Profile />} />
      </Route>

      {/*Admin Routes */}
      <Route path="/admin" element={<AdminRoute /> }> 
        <Route path="userlist" element={<UserList />} />
        <Route path="categorylist" element={<CategoryList />} />
        <Route path="productlist" element={<ProductList />} />
        <Route path="product/update/:id" element={<ProductUpdate />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store} >
    <RouterProvider router={router} />
  </Provider>
   
);