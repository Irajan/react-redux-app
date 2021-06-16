import { useEffect, useState } from "react";

function Answer(props) {
  const [answer, setAnswer] = useState([]);

  console.log(props);

  useEffect(function () {
    //fetch data using rest API

    setAnswer([
      {
        content: "My name is Irajan",
      },
    ]);

    setAnswer("My name is something");
  }, []);

  return <h1>{answer}</h1>;
}

export default Answer;
