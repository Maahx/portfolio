import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./Pages/Admin";
import List from "./Pages/List";
import NoPage from "./Pages/NoPage";
import Home from "./Pages/Home";

function App() {

  return (
    <div>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route index element={<List />} />
          <Route path="/home" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/list" element={<List />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
