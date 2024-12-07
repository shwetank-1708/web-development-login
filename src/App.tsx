import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import SingUp from "./pages/SingUp";

function App() {
  return (
    <>
      <Navbar />{" "}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SingUp />} />
      </Routes>
    </>
  );
}

export default App;
