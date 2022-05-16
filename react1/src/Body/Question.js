// A Question component displaies one question in questions.json
function Question({item}) {
    return(
        <div className="question">{item.question}</div>
    );
}

export default Question;