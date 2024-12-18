import "./App.css";
import Store from "./pages/Store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Feed from "./pages/Feed";
import FabricSearch from "./pages/FabricSearch";
import HomePage from "./pages/HomePage";
import Blog from "./pages/Blog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user/store" element={<Store />} />
        {/* <Route path="/user/rate-card" element={<RateCard />} /> */}
        <Route path="/user/feed" element={<Feed />} />
        <Route path="/user/fabric-search" element={<FabricSearch />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/user/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
