import { FC } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from "../modules/login";
import { Register } from "../modules/registration";

const Container: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default Container;
