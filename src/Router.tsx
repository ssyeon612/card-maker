import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Card from "./pages/card";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/card" element={<Card />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
