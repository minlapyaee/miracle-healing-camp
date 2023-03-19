import React from "react";
import Footer from "../../components/Footer";
import Reminderinthecalendar from "../../assets/Booking/Reminderinthecalendar.png"
import "./Booking.css"


const Booking = () => {
    return(
        <div className="divBooking">
            <div className="divBooking1 ">
                <span>
                    
                    <img src={Reminderinthecalendar} />
                </span>
                <span>
                    <h1>We focus on your mental health</h1>
                    <p>Let's make an appointment</p>
                </span>
                
            </div>
            <div className="divBooking2">
                <h1>Book an Appointment</h1>
                <p>Before choosing the time that you are available, please fill out your information and we will get back soon to you for more updates and plan your appointment.</p>
            </div>
            <div className="divBooking3">
                <form>
                    <h1>Appointment Request Form</h1>
                    <fieldset className="fstForm1" >
                        <legend>Name</legend>
                        <input type="text" placeholder="First Name"/>
                        <input type="text" placeholder="Last Name"/>
                    </fieldset>
                    <fieldset className="fstForm1">
                        <legend>Date of Birth</legend>
                        <input type="number" placeholder="Day"/>
                        <input type="number" placeholder="Month"/>
                        <input type="number" placeholder="Year"/>
                    </fieldset>
                    <fieldset className="fstForm1">
                        <legend>Gender</legend>
                        <select>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Prefer not to disclose</option>
                        </select>
                    </fieldset>
                    <fieldset className="fstForm1">
                        <legend>Phone Number</legend>
                        <input type="tel" placeholder="Phone Number"></input>
                    </fieldset>
                    <fieldset className="fstForm1">
                        <legend>Email</legend>
                        <input type="email" placeholder="Email"></input>
                    </fieldset>
                    <fieldset className="fstForm2">
                        <legend>Have you ever made appointment before?</legend>
                        <input type="radio" name="rdoQ1" id="rdo1Q1" />
                        <label for="rdo1Q1">Yes</label>
                        <input type="radio" name="rdoQ1" id="rdo2Q1" />
                        <label for="rdo2Q1">No</label>
                    </fieldset>
                    <fieldset className="fstForm2">
                        <legend>How often do you feel stressed?</legend>
                        <input type="radio" name="rdoQ2" id="rdo1Q2" />
                        <label for="rdo1Q2">Never</label>
                        <input type="radio" name="rdoQ2" id="rdo2Q2" />
                        <label for="rdo2Q2">Rarely</label>
                        <input type="radio" name="rdoQ2" id="rdo3Q2" />
                        <label for="rdo3Q2">Often</label>
                        <input type="radio" name="rdoQ2" id="rdo4Q2" />
                        <label for="rdo4Q2">Always</label>
                    </fieldset>
                    <fieldset className="fstForm2">
                        <legend>Have you felt anxious or on edge in the past two weeks?</legend>
                        <input type="radio" name="rdoQ3" id="rdo1Q3" />
                        <label for="rdo1Q3">Not really</label>
                        <input type="radio" name="rdoQ3" id="rdo2Q3" />
                        <label for="rdo2Q3">Once or Twice</label>
                        <input type="radio" name="rdoQ3" id="rdo3Q3" />
                        <label for="rdo3Q3">Yes, Often</label>
                        <input type="radio" name="rdoQ3" id="rdo4Q3" />
                        <label for="rdo4Q3">Always</label>
                    </fieldset>
                    <fieldset className="fstForm2">
                        <legend>Do you have hard time to sleep?</legend>
                        <input type="radio" name="rdoQ4" id="rdo1Q4" />
                        <label for="rdo1Q4">Never</label>
                        <input type="radio" name="rdoQ4" id="rdo2Q4" />
                        <label for="rdo2Q4">Rarely</label>
                        <input type="radio" name="rdoQ4" id="rdo3Q4" />
                        <label for="rdo3Q4">Often</label>
                        <input type="radio" name="rdoQ4" id="rdo4Q4" />
                        <label for="rdo4Q4">Always</label>
                    </fieldset>
                    <button>Next</button>
                </form>
                
            </div>
            <div className="divBooking4">
                <form>
                        <h1>Preferred Appointment Date  </h1>
                        <fieldset className="fstForm1">
                            <legend>Which Date and time work best for you?</legend>
                            (Calendar)
                        </fieldset>
                        <fieldset className="fstForm1">
                            <legend>Any other specific date and time, if the above selection is not suitable.</legend>
                            <input type="number" placeholder="Day"/>
                            <input type="number" placeholder="Month"/>
                            <input type="number" placeholder="Year"/>
                        </fieldset>
                        <fieldset className="fstForm1">
                            <legend>What do you expect us from the appointment?</legend>
                            <textarea></textarea>
                        </fieldset>
                        <button>Next</button>
                    </form>
            </div>
            <Footer />
        </div>
    )
}

export default Booking;