import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import Register from "./pages/Register";

function App() {

  return (
    <Router>
        <Routes>
          <Route exact path='/'>
            <Home />
          </Route>

          <Route path='/login'>
            <Login />
            </Route>

            <Route path='/initial-page'> 
            <HomePage />
            </Route>

            <Route path='/register'> 
            <Register />
            </Route>
      </Routes>

    </Router >
  );
}

export default App;