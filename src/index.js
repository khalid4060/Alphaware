import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Header from './Header';
import { createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Outlet,RouterProvider } from "react-router-dom";
import Cart from './Cart';
import appStore from './utility/appStore';

const Applayout=()=>{
  return (
    <Provider store={appStore} >
      <div id="applayout">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
const approut = createBrowserRouter([
  {
    path: "/",
    element: <Applayout/>,
    children: [
      {
        path: "/cart",
        element: <Cart />,
      },{
        path: "/",
        element: <App/>,
      }
    ]}])
root.render(
  <RouterProvider router={approut} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
