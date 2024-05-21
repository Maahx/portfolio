import NavBar from './components/NavBar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from './components/Pages/NoPage';
import AboutMe from './components/Pages/AboutMe';
import Work from './components/Pages/Work';
import Contact from './components/Pages/Contact';
import MoreAboutMe from './components/Pages/MoreAboutMe';
import Reference from './components/Pages/References';
import Login from './components/Pages/Login';

function App() {
  return (
    <div>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route index element={<AboutMe />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
          <Route path="/more" element={<MoreAboutMe/>} />
          <Route path="/reference" element={<Reference/>} />
          <Route path={process.env.REACT_APP_ADMIN_KEY} element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
