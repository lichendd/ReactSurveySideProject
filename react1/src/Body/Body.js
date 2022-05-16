import Questions from "../questions"
import Question from "./Question"

function Body() {
    return(
        <div>
            <h1>
            Please fillin this survey to help us better understand you
            </h1>
            {Questions.map((item) => (
                <Question key={item.id} item={item} />
            ))}
        </div>
    );
}

export default Body;