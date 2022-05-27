import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import ReactDOM from "react-dom/client";
import "./index.css";
import Title from "./Header/Title";
import Body from "./Body/Body";
import FooterPage from "./FooterPage.jsx";
import reportWebVitals from "./reportWebVitals";
import SurveyPage from "./Pages/SurveyPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SubmittedPage from "./Pages/SubmittedPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="Survey">
    <Title />
    <Router>
      <Routes>
        <Route path="/" element={<SurveyPage />} />
        <Route path="/submitted" element={<SubmittedPage />} />
      </Routes>
    </Router>
    <FooterPage />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
