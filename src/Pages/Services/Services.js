import React from "react";
import ConductGroup from "../../assets/services/ConductGroup.png";
import Clipboard from "../../assets/services/clipboard.png";
import HandHolding from "../../assets/services/hold-hands.png";
import MessageImage from "../../assets/services/Messages.png";
import Calendar from "../../assets/services/calendar.png";
import Doctor from "../../assets/services/Doctor.png";
import ManWithSign from "../../assets/services/ManWithSign.png";
import Equality from "../../assets/services/Equality.png";


import "./Services.css";
import Footer from "../../components/Footer";

const AboutUs = () => {
  return (
    <div className="divServices">
      <div className="divServices1">
        <span className="spn1Services1">
          <h1>Find the right treatment for your mental health</h1>
        </span>
        <span className="spn2Services1">
          <p>
            7 out of 10 people recover completely. <br/>
            You made it this far. <br/>
            Now, let's get you the help you need.<br/><br/>
            <button>Book Now</button>
          </p>
          <img src={ConductGroup}/>
        </span>
      </div>



      <div className="divServices2">
        <h1>What are some types of mental disorders?</h1>
        <p className="txt1Services2" >There are many different types of mental disorders. Some common ones include: 
          <ul>
            <li>Anxiety disorders, including panic disorder, obsessive-compulsive disorder, and phobias</li>
            <li>Depression, bipolar disorder, and other mood disorders</li>
            <li>Eating disorders</li>
            <li>Personality disorders</li>
            <li>Post-traumatic stress disorder</li>
            <li>Psychotic disorders, including schizophrenia</li>
          </ul>
        </p>
        <p className="txt2Services2">
          Based on our clinical expertise, decades of experience, and the latest science in mental health care,
          we have created a programmatic approach to drive real change and improvement over time.
        </p>
        <span className="spn1Services2">
          <img src={Clipboard}/>
          <fieldset className="fstServices2">
            <p>
              Be sure to take the assessment test or free quizzes from our website
              and then book immediately if your results show severe.
            </p>
            <button>Take Assessment</button>
          </fieldset>
        </span>
        
      </div>



      <div className="divServices3">
        <h1>Try Our approach to Mental Health treatment</h1>
        <ul>
          <li>
            <img src={Calendar} />
            <label>Make an appointment</label>
          </li>
          <span className="arrow"><img ></img></span>
          <li>
            <img src={Doctor} />
            <label>Get Approval Date</label>
          </li>
          <span className="arrow"></span>
          <li>
            <img src={ManWithSign} />
            <label>Consult to your therapist</label>
          </li>
          <span className="arrow"></span>
          <li>
            <img src={Equality} />
            <label>Join our community</label>
          </li>
        </ul>
        <button>Book Now</button>
      </div>



      <div className="divServices4">
        <img src={HandHolding} />
        <p>We are willing to help you and try to heal your inner pain in the
        first priority. Don’t forget that we are always here for you!</p>
      </div>



      <div className="divServices5">
        <img src={MessageImage} />
        <p>
          <h1>Need Help for Someone you care about?</h1>
          If you're watching someone struggle & want to help them, our support team can guide you.
        </p>
        <button>Contact With Us</button>
      </div>



      <Footer/>
    </div>
  );
};

export default AboutUs;
