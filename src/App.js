import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import SignUp from "./pages/SignUp"
import Users from "./pages/Users"
import Contents from "./pages/Contents"
import { Wrapper } from "./styled/common.js"

function App() {
  return (
    <Wrapper>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<SignUp />} />
          <Route exact path="/sign-in" element={<SignUp />} />
          <Route path="/user" element={<Users />} />
          <Route path="/content/:contentId" element={<Contents />} />
        </Routes>
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;
