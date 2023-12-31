import React from "react";
import Home from "./routes/home/home";
import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/navigation";
import SignIn from "./routes/signup/signup";

const Shop = () => {
  return <h1>THis is the shop page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="Shop" element={<Shop />} />
        <Route path="signin" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
