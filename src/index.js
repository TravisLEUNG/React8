import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";

const root = ReactDOM.createRoot(document.getElementById("root"));

// React: Organize Components
/////////////////////////////////////////////////////

function App() {
  return (
    <div id="container">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

root.render(<App />);