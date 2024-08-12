import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";           // Main component
import UnityApp from "./UnityApp"; // Component for the Unity application

// Render the application
ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />     {/* Home route */}
      <Route path="/unity" element={<UnityApp />} />  {/* Route for Unity application */}
    </Routes>
  </Router>,
  document.getElementById("root") // Element where the app will be mounted
);
