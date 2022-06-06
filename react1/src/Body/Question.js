// A Question component displaies one question in questions.json
import "./QuestionStyle.css";
import TextField from "./TextField.tsx";
import { Text, StyleSheet } from "react-native";

function Question({ key, item }) {
  const hasChoice = item.hasChoice;
  return (
    <div className="question">
      {!hasChoice ? (
        <div>
          <div className="question">
            <Text style={{ fontWeight: "bold" }}>Question {item.id}</Text>{" "}
            {item.question}
          </div>
          <input
            type="text"
            class="main-input main-name"
            placeholder={"Please type your answer"}
          />
          {/* <TextField placeholder={"This is placeholder"} /> */}
        </div>
      ) : (
        <div>
          <div className="question">
            <Text style={{ fontWeight: "bold" }}>Question {item.id}</Text>{" "}
            {item.question}
          </div>
          {item.choices.map((choice) => (
            <div className="topping">
              <input
                type="checkbox"
                id="topping"
                name="topping"
                value="Choice"
              />
              <Text>{"  "}</Text>
              {choice}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Question;
