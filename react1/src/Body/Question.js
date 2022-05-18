// A Question component displaies one question in questions.json
import "./QuestionStyle.css"
import TextField from "./TextField.tsx";

function Question({key, item}) {
    const hasChoice = item.hasChoice;
    return(
        <div>
            {!hasChoice ? (
                <div>
                    <div className="question">Question {item.id} {item.question}</div>
                    <TextField />
                </div>
            ):(
                <div>
                    <div className="question">Question {item.id} {item.question}</div>
                    {item.choices.map((choice) => (
                        <div className="topping">
                            <input type="checkbox" id="topping" name="topping" 
                            value="Choice" />
                            {choice}
                        </div>
                    ))}
                    
                </div>
            )}
        </div>
    );
}

export default Question;