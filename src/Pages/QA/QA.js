import React, { useEffect, useState } from "react";
import "./QA.css";
import Givingletter from "../../assets/QA/givingletter.png";
import { Link } from 'react-router-dom'

const questions = [
  {
    title: "1. Little interest or pleasure in doing things",
    name: "one",
  },
  {
    title: "2. Feeling down, depressed, or hopeless",
    name: "two",
  },
  {
    title: "3. Trouble falling or staying asleep, or sleeping too much",
    name: "three",
  },
  {
    title: "4. Feeling tired or having little energy",
    name: "four",
  },
  {
    title: "5. Poor appetite or overeating",
    name: "five",
  },
  {
    title:
      "6. Feeling bad about yourself - or that you are a failure or have let yourself or your family down",
    name: "six",
  },
  {
    title:
      "7. Trouble concentrating on things, such as reading the newspaper or watching television",
    name: "seven",
  },
  {
    title:
      "8. Moving or speaking so slowly that other people could have noticed or the opposite - being so fidgety or restless that you have been moving around a lot more than usual",
    name: "eight",
  },
  {
    title:
      "9. Thoughts that you would be better off dead, or of hurting yourself",
    name: "nine",
  },
  {
    title:
      "10. If you checked off any problems, how difficult have these problems made it for you at work, home, or with other people?",
    name: "ten",
  },
];

const QA = () => {
  const [values, setValues] = useState({
    one: 0.25,
    two: 0.25,
    three: 0.25,
    four: 0.25,
    five: 0.25,
    six: 0.25,
    seven: 0.25,
    eight: 0.25,
    nine: 0.25,
    ten: 0.25,
  });
  const [result, setResult] = useState({
    score: 0,
    rank: "",
  });
  const [isDoneTest, setIsDoneTest] = useState(false);
  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    console.log({[e.target.name]: e.target.value})
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const reTakeRest = () => {
    setValues({
      one: 0.25,
      two: 0.25,
      three: 0.25,
      four: 0.25,
      five: 0.25,
      six: 0.25,
      seven: 0.25,
      eight: 0.25,
      nine: 0.25,
      ten: 0.25,
    });
    setIsDoneTest(false);
  };

  const handleSubmit = () => {
    let cloneValue = { ...values };
    let total = 0;
    Object.entries(cloneValue).map(([key, value]) => {
      total += Number(value);
    });
    if (total <= 5) {
      setResult({
        rank: "Moderate",
        score: total,
      });
    } else if (total >= 8) {
      setResult({
        rank: "Mild",
        score: total,
      });
    } else {
      setResult({
        rank: "Serious",
        score: total,
      });
    }
    setIsDoneTest(true);
  };

  return (
    <div className="divQA">
      <div className="divQA1">
        <h1>Depression test</h1>
      </div>
      {isDoneTest ? (
        <>
          <div className="divQA3" style={{ display: "flex" }}>
            <h1>Depression Test - &nbsp; </h1>
            <h1 style={{ color: "#FFC926" }}>{result.rank}</h1>
          </div>
          <div className="divQA4">
            <ul>
              <li
                className="liresult"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: 200,
                }}
              >
                Score: {result.score}/10
              </li>
              {/* <li
                className="liemail "
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Email Result
              </li> */}
              <li
                className="litest"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={reTakeRest}
              >
                Retake Test
              </li>
              <li
                className="lihome"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Link 
                  to="/"
                  style={{ color: "#fff", textDecoration: "underline" }}
                >
                  Back to Home
                </Link>
              </li>
            </ul>
            <div style={{ width: 400 }}>
              <img src={Givingletter} width="100%" height="100%"></img>
            </div>
          </div>
        </>
      ) : (
        <div className="divQA2">
          <p>
            <b>
              Over the last 2 weeks, how often have you been bothered by any of
              the following problems? <br />
              lease note, all fields are required.
            </b>
          </p>
          {questions.map((question) => {
            return (
              <fieldset key={question.title}>
                <legend>{question.title}</legend>
                <input
                  type="radio"
                  name={question.name}
                  id={question.name + 1}
                  value={0.25}
                  checked={0.25 === Number(values[question.name])}
                  onChange={handleChange}
                />
                <label for={question.name + 1}>Not at all</label>
                <input
                  type="radio"
                  name={question.name}
                  id={question.name + 2}
                  value={0.5}
                  checked={0.5 === Number(values[question.name])}
                  onChange={handleChange}
                />
                <label for={question.name + 2}>Serveral days</label>
                <input
                  type="radio"
                  name={question.name}
                  id={question.name + 3}
                  value={0.75}
                  checked={0.75 === Number(values[question.name])}
                  onChange={handleChange}
                />
                <label for={question.name + 3}>More than half a days</label>
                <input
                  type="radio"
                  name={question.name}
                  id={question.name + 4}
                  value={1}
                  checked={1 === Number(values[question.name])}
                  onChange={handleChange}
                />
                <label for={question.name + 4}>Nearly everyday</label>
              </fieldset>
            );
          })}

          <button onClick={handleSubmit}>View Result&emsp;-&gt;</button>
        </div>
      )}
    </div>
  );
};

export default QA;
