import { createRoot } from "react-dom/client";
import App from "./App.js";
import "./style.css";

const root = createRoot(document.getElementById("root"));

// root.render(<App root={root} />);
root.render(<App />);
