
import './App.css';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

import React from "react";
import {
  // to avoid page reloading
  // anchor tab cannot be used for single page application
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/Signup';
import MyOrder  from './screens/MyOrder';
import { CartProvider } from './components/ContextReducer';
{/**Using Bootstrap for using javascript of bootstrap elements such as carousel */ }

{/**Author: UnderBelly */ }
function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Login" element={<Login />} />
            <Route exact path="/createuser" element={<Signup />} />
            <Route exact path="/myOrder" element={<MyOrder />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
