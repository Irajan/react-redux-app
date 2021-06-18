import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import QuestionAnswer from "../components/questionAnswer";
import Editor from "../components/editor";

import { error } from "../actions/actions";
import { edit } from "../actions/actions";

import * as questionService from "../services/question";

function QnAndAnsList() {
  const [questions, setQuestions] = useState([{}]);
  const edited = useSelector((state) => state.edited);

  const dispatch = useDispatch();

  useEffect(
    function () {
      (async function () {
        try {
          const { data } = await questionService.get();
          setQuestions(data);
        } catch (err) {
          dispatch(error(err));
        }
      })();
    },
    [dispatch, edited]
  );

  async function addQuestion() {
    const content = prompt("Type your question.");

    try {
      await questionService.add({ content });
      dispatch(edit("Your question added successfully."));
    } catch (err) {
      dispatch(error(err));
    }
  }

  return (
    <fieldset>
      <Editor
        onAdd={(e) => {
          e.stopPropagation();
          addQuestion();
        }}
      />
      <div className="edit">{edited.message}</div>
      <legend>Questions till now</legend>
      <ol>
        {questions.map((question, index) => {
          return (
            <li key={index}>
              <QuestionAnswer question={question} />
            </li>
          );
        })}
      </ol>
    </fieldset>
  );
}

export default QnAndAnsList;
