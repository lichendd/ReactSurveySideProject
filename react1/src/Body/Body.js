import Questions from "../questions";
import Question from "./Question";
// import { useNavigate, Route} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./BodyStyle.css";
import { Link, animateScroll as scroll } from "react-scroll";

function Body() {
  const navigate = useNavigate();
  function submit() {
    navigate('/submitted');
  }
  
  return (
    <div className="anyClass">
      <h1>Student Information Survey</h1>
      <h2>Please fillin this survey to help us better understand you</h2>
      {Questions.map((item) => (
        <Question key={item.id} item={item} />
      ))}
      <button type="button" class="btn btn-light" onClick={submit}>Submit</button>
    </div>
  );
}

export default Body;
