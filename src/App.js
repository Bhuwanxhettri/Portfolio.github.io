import Body from "./Component/BodyPart/Body";
import Footer from "./Component/Footer/Footer";
import Nav from "./Component/NavBar/Nav";
import { Routes, Route } from "react-router-dom";
import Project from "./Component/Project/Project"


function App() {
  return (
    <>
      <div className="flex">
        <div>
          <Footer />
        </div>
        <div className="mx-20">
          <Nav />
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/project" element={<Project/>}/>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
