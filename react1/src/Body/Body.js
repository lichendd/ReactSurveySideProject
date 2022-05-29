import Questions from "../questions";
import Question from "./Question";
import { useNavigate } from "react-router-dom";
import "./BodyStyle.css";
import { Link, animateScroll as scroll } from "react-scroll";

function Body() {
  return (
    <div className="container-fluid">
      <h1>Student Information Survey</h1>
      <h2>Please fillin this survey to help us better understand you</h2>
      {Questions.map((item) => (
        <Question key={item.id} item={item} />
      ))}
      <button type="button" class="btn btn-light">
        Submit
      </button>
    </div>
  );
}

export default Body;
