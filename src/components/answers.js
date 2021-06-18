import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { edit, error } from "../actions/actions";

import * as answerService from "../services/answer";

import Editor from "./editor";

function Answer(props) {
  const [answers, setAnswers] = useState([]);
  const dispatch = useDispatch();

  useEffect(
    function () {
      (async function () {
        try {
          const { data } = await answerService.get(props.qid);

          setAnswers(data);
        } catch (err) {
          dispatch(error(err));
        }
      })();
    },
    [props, dispatch]
  );

  async function deleteAnswer(id) {
    try {
      await answerService.remove(id);
      dispatch(edit("Successfully deleted answer"));
    } catch (err) {
      dispatch(error(err));
    }
  }

  async function editAnswer(id) {
    const content = prompt("Place your new answer here");

    try {
      await answerService.update(id, { content });
      dispatch(edit("Successfully updated answer"));
    } catch (err) {
      dispatch(error(err));
    }
  }

  return (
    <ul>
      {answers.map((answer, index) => {
        return (
          <li key={index}>
            <div>{answer.content}</div>
            <Editor
              onDelete={(e) => {
                e.stopPropagation();
                deleteAnswer(answer.id);
              }}
              onEdit={(e) => {
                e.stopPropagation();
                editAnswer(answer.id);
              }}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default Answer;
