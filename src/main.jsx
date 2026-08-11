import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import ScrollToTop from "./components/Common/Scrolling/ScrollToTop";

import "./styles/variables.css";
import "./styles/global.css";
import "./styles/utilities.css";

import App from "./App";

createRoot(document.getElementById("root")).render(
    <StrictMode>
       <HashRouter>
            <ScrollToTop />
    <App />
</HashRouter>
    </StrictMode>
);