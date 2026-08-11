import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Committees from "./pages/Committees/Committees";
import Contact from "./pages/Contact/Contact";
import Team from "./pages/Team/Team";
import Highlights from "./pages/Highlights/Highlights";


function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/committees" element={<Committees />} />
                <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path ="highlights" element={<Highlights/>}/>
        </Routes>
    );
}

export default App;