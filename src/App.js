import "./App.css";
import Store from "./pages/Store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Feed from "./pages/Feed";
import FabricSearch from "./pages/FabricSearch";
import RateCard from "./pages/RateCard";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user/store" element={<Store />} />
        <Route path="/user/rate-card" element={<RateCard />} />
        <Route path="/user/feed" element={<Feed />} />
        <Route path="/user/fabric-search" element={<FabricSearch />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
