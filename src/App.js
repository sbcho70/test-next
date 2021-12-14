import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Users from "./pages/Users"
import Contents from "./pages/Contents"
import { Wrapper } from "./styled/common.js"

function App() {
  return (
    <Wrapper>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/sign-in" element={<Login />} />
          <Route path="/user" element={<Users />} />
          <Route path="/content/:contentId" element={<Contents />} />
        </Routes>
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;
