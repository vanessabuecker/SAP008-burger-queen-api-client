import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Hall from "./pages/Hall";
import Kitchen from "./pages/Kitchen";

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

        <Route path='/kitchen'>
          <Kitchen />
        </Route>

        <Route path='/hall'>
          <Hall />
        </Route>

        <Route path='/register'>
          <Register />
        </Route>
      </Routes>

    </Router >
  );
}

export default App;