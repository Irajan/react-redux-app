import { useState } from "react";
import { useDispatch } from "react-redux";

import "./styles/styles.questionAnswer.css";

import * as questionService from "../services/question";
import * as answerService from "../services/answer";

import { error } from "../actions/actions";
import { edit } from "../actions/actions";

import Answers from "./answers";
import Editor from "./editor";

function QuestionAnswer({ question }) {
  const [answerHidden, setAnswerHidden] = useState(true);
  const dispatch = useDispatch();

  async function editQuestion(qId) {
    const content = prompt("Place your new question.");
    try {
      await questionService.update(qId, { content });
      dispatch(edit("Your question updated successfully."));
    } catch (err) {
      dispatch(error(err));
    }
  }

  async function deleteQuestion(id) {
    try {
      await questionService.remove(id);
      dispatch(edit("Your question deleted successfully."));
    } catch (err) {
      dispatch(error(err));
    }
  }

  async function addAnswer(question) {
    const content = prompt("Place your answer");
    try {
      await answerService.add({ content, question });
      dispatch(edit("Your answer added successfully"));
      setAnswerHidden(false);
    } catch (err) {
      dispatch(error(err));
    }
  }

  return (
    <>
      <div
        className="question-container"
        title={`Question assigned by ${question.questionBy}`}
      >
        <div className="question-content">{question.content}</div>
        <Editor
          onEdit={(e) => {
            e.stopPropagation();
            editQuestion(question.id);
          }}
          onDelete={(e) => {
            e.stopPropagation();
            deleteQuestion(question.id);
          }}
          onAdd={(e) => {
            e.stopPropagation();
            addAnswer(question.id);
          }}
        />

        <div
          onClick={(e) => {
            e.stopPropagation();
            setAnswerHidden(!answerHidden);
          }}
        >
          {" "}
          Show Answers
        </div>
      </div>
      {!answerHidden && <Answers qid={question.id} />}
    </>
  );
}

export default QuestionAnswer;
