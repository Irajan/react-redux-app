import { useState } from "react";
import Answer from "./answer";

function Card(props) {
  const [answerView, setAnswerView] = useState(false);

  return (
    <>
      <div>
        <h1>{props.question}</h1>
        <button onClick={() => setAnswerView(!answerView)}>
          {answerView ? "Hide" : "Show"}
        </button>
      </div>
      {answerView && <Answer qId={props.qId} />}
    </>
  );
}

export default Card;
