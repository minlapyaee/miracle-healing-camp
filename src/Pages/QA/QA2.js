import React, { useEffect, useState } from "react";
import "./QA.css";
import Givingletter from "../../assets/QA/givingletter.png";
import { Link } from 'react-router-dom'

const questions = [
  {
    title: "1. Do you worry about lots of different things?",
    name: "one",
  },
  {
    title: "2. Do you have trouble controlling your worries?",
    name: "two",
  },
  {
    title: "3. Do you get irritable and/or easily annoyed when anxious?",
    name: "three",
  },
  {
    title: "4. Does worry or anxiety make you feel fatigued or worn out?",
    name: "four",
  },
  {
    title:
      "5.Does worry or anxiety interfere with falling and/or staying asleep?",
    name: "five",
  },
  {
    title: "6. Does worry or anxiety make it hard to concentrate?",
    name: "six",
  },
  {
    title: "7. 7.Do you feel jumpy?",
    name: "seven",
  },
  {
    title: "8. Do you worry about how well you do things?",
    name: "eight",
  },
  {
    title: "9.Do you worry about things working out in the future?",
    name: "nine",
  },
  {
    title:
      "10.Do you worry about things that have already happened in the past?",
    name: "ten",
  },
  {
    title: "11. Do your muscles get tense when you are worried or anxious?",
    name: "eleven",
  },
];

const QA2 = () => {
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
    eleven: 0.25,
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
      eleven: 0.25,
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
      console.log("Moderate");
      setResult({
        rank: "Moderate",
        score: total,
      });
    } else if (total >= 8) {
      console.log("Mild");
      setResult({
        rank: "Mild",
        score: total,
      });
    } else {
      console.log("Serious");
      setResult({
        rank: "Serious",
        score: total,
      });
    }
    console.log(total);
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
                Score: {result.score}/11
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

export default QA2;
