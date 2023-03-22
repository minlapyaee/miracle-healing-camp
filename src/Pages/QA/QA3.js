import React, { useEffect, useState } from "react";
import "./QA.css";
import Givingletter from "../../assets/QA/givingletter.png";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Link,
  Radio,
  RadioGroup,
} from "@mui/material";

const questions = [
  {
    title:
      "1. Had nightmares about the event(s) or thought about the event(s) when you did not want to?",
    name: "one",
  },
  {
    title:
      "2. tried hard not to think about the event(s) or went out of your way to avoid situations that reminded you of the event(s)?",
    name: "two",
  },
  {
    title: "3. been constantly on guard, watchful, or easily startled?",
    name: "three",
  },
  {
    title:
      "4. felt numb or detached from people, activities, or your surroundings?",
    name: "four",
  },
  {
    title:
      "5. felt guilty or unable to stop blaming yourself or others for the event(s) or any problems the event(s) may have caused?",
    name: "five",
  },
  {
    title:
      "6. Think about your mental health test. What are the main things contributing to your mental health problems right now? Choose up to 4.",
    checkbox: true,
    name: "six",
    options: [
      { title: "Abuse or Violence" },
      {
        title: "Relationship problems (friends, family, or significant other)",
      },
      { title: "Body image or self-image" },
      { title: "School or work problems" },
      { title: "Basic needs (no food or housing)" },
      { title: "Financial problems" },
      { title: "Loneliness or isolation" },
      { title: "Grief or loss of someone or something" },
      { title: "Racism, homophobia, transphobia, or discrimination" },
    ],
  },
];

const QA3 = () => {
  const [values, setValues] = useState({
    one: 0.25,
    two: 0.25,
    three: 0.25,
    four: 0.25,
    five: 0.25,
  });
  const [multipleRadio, setMultipleRadio] = useState([]);

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
    });
    setIsDoneTest(false);
  };

  const handleChangeMultiple = e => {
    let clone = [...multipleRadio]
    if(clone.length > 3) {
      clone.length--;
      clone.push(e.target.value)
    }else {
      clone.push(e.target.value)
    }
    setMultipleRadio(clone)
  }

  const handleSubmit = () => {
    let cloneValue = { ...values };
    let total = 0;
    Object.entries(cloneValue).map(([key, value]) => {
      total += Number(value);
    });
    total += multipleRadio.length * 0.25
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
                Score: {result.score}/5
              </li>
              <li
                className="liemail "
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Email Result
              </li>
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
            if (question?.checkbox) {
              return (
                <fieldset key={question.title}>
                  <legend>{question.title}</legend>
                  <FormControl>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="female"
                      name="radio-buttons-group"
                    >
                      {question.options.map((option) => (
                        <FormControlLabel
                          value={option.title}
                          control={<Radio />}
                          label={option.title}
                          checked={multipleRadio.includes(option.title)}
                          className="noStyle"
                          onChange={handleChangeMultiple}
                        />
                      ))}
                    </RadioGroup>
                  </FormControl>
                </fieldset>
              );
            } else {
              return (
                <fieldset key={question.title}>
                  <legend>{question.title}</legend>
                  <input
                    type="radio"
                    name={question.name}
                    id={question.name + 1}
                    value={0.25}
                    checked={0.25 === values[question.name]}
                    onChange={handleChange}
                  />
                  <label for={question.name + 1}>Not at all</label>
                  <input
                    type="radio"
                    name={question.name}
                    id={question.name + 2}
                    value={0.5}
                    checked={0.5 === values[question.name]}
                    onChange={handleChange}
                  />
                  <label for={question.name + 2}>Serveral days</label>
                  <input
                    type="radio"
                    name={question.name}
                    id={question.name + 3}
                    value={0.75}
                    checked={0.75 === values[question.name]}
                    onChange={handleChange}
                  />
                  <label for={question.name + 3}>More than half a days</label>
                  <input
                    type="radio"
                    name={question.name}
                    id={question.name + 4}
                    value={1}
                    checked={1 === values[question.name]}
                    onChange={handleChange}
                  />
                  <label for={question.name + 4}>Nearly everyday</label>
                </fieldset>
              );
            }
          })}

          <button onClick={handleSubmit}>View Result&emsp;-&gt;</button>
        </div>
      )}
    </div>
  );
};

export default QA3;
