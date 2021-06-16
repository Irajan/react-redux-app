import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import Card from "./card";
import { END_POINT } from "../constants";

function QnAndAns() {
  const [questions, setQuestions] = useState([]);

  const token = useSelector((state) => state.logged.accessToken);

  useEffect(
    function () {
      const headers = { Authorization: `Barer ${token}` };
      const url = `${END_POINT}/api/questions`;

      (async function () {
        const { data } = await axios.get(url, { headers });
        setQuestions(data);
      })();
    },
    [token]
  );

  return (
    <>
      {questions.length === 0
        ? "No questions just yet"
        : questions.map(({ content, id }) => {
            return <Card key={id} qId={id} question={content} />;
          })}
    </>
  );
}

export default QnAndAns;
