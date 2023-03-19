import React from "react";
import "./QA.css";
import Givingletter from "../../assets/QA/givingletter.png"

const QA = () => {
    return(
        <div className="divQA">
            <div className="divQA1">
                <h1>Depression test</h1>
            </div>



            <div className="divQA2">
                <p><b>Over the last 2 weeks, how often have you been bothered by any of the following problems? <br/>lease note, all fields are required.</b></p>
                <fieldset>
                    <legend>1. Little interest or pleasure in doing things</legend>
                    <input type="radio" name="rdoQ1" id="rdo1Q1" />
                    <label for="rdo1Q1">Not at all</label>
                    <input type="radio" name="rdoQ1" id="rdo2Q1"/>
                    <label for="rdo2Q1">Serveral days</label>
                    <input type="radio" name="rdoQ1" id="rdo3Q1"/>
                    <label for="rdo3Q1">More than half a days</label>
                    <input type="radio" name="rdoQ1" id="rdo4Q1" />
                    <label for="rdo4Q1">Nearly everyday</label>
                </fieldset>
                <button>View Result&emsp;-&gt;</button>
            </div>



            <div className="divQA3">
                <h1>Your result _ Depression Test</h1>
                <h1>Moderate/Serious/Mild/</h1>
            </div>
            <div className="divQA4">
                <ul>
                    <li className="liresult">About your score: n/10</li>
                    <li className="liemail">Email Result</li>
                    <li className="litest">Take another Test</li>
                    <li className="lihome">Back to Home</li>
                </ul>
                <img src={Givingletter}></img>
            </div>
        </div>
    )
}

export default QA;