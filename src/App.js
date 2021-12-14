import React from "react";
import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Users from "./pages/Users"
import Contents from "./pages/Contents"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/sign-in" component={<Login />} />
        <Route path="/user" component={<Users />} />
        <Route path="/content/:contentId" component={<Contents />} />
      </Routes>
    </div>
  );
}

export default App;
