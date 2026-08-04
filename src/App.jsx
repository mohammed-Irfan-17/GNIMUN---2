import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Committees from "./pages/Committees/Committees";
import Highlights from "./pages/Highlights/Highlights";
import Contact from "./pages/Contact/Contact";


function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/committees" element={<Committees />} />
            <Route path="/highlights" element={<Highlights />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    );
}

export default App;