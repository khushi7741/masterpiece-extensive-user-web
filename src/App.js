import logo from "./logo.svg";
import "./App.css";
import Store from "./pages/Store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Ratecard from "./pages/Ratecard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user/store" element={<Store />} />
        <Route path="/user/rate-guide" element={<Ratecard />} />
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //   </div>
  );
}

export default App;
