import React from "react";
import OnlineMeeting from "../../assets/blog/OnlineMeeting.png";
import Signing from "../../assets/blog/Signing.png";
import Profile from "../../assets/blog/profile.png"

import "./MainBlog.css";
import Footer from "../../components/Footer";

const MainBlog = () => {
    return(
        <div className="divBlog">
            <div className="divBlog1">
                <span className="spn1Blog1">
                    <h1>Ask, post, earn, and make friends in all in one place.</h1>
                </span>
                <span className="spn2Blog1">
                    <img src={OnlineMeeting} />
                </span>
            </div>
            <div className="divBlog2">
                <span className="spn1Blog2">
                    <h1>Join the community of curious minds!</h1>
                </span>
                <span className="spn2Blog2">
                    <img src={Signing} />
                    <fieldset>
                        <legend><h1>Start Writing!</h1></legend>
                        <ul>
                            <li>Ask what you want to know</li><br/>
                            <li>Share what you know</li><br/>
                            <li>Comment you friends</li><br/>
                            <li>Make friends!</li><br/>
                        </ul>
                        <button>Write Now</button>
                    </fieldset>
                </span>
            </div>
            <div className="divBlog3">
                <h1>Popular Blogs</h1>
                <span className="spn1Blog3">   
                    <fieldset>
                        <img src={Profile}></img>
                        User
                        <p>
                            <h1>Are there cures for mental health problems?</h1>
                            It is often more realistic and helpful to find out what helps with the issues you face. Talking, counselling, medication, friendships, exercise, good sleep and nutrition, and meaningful occupation can all help.
                            <br/><button>Like - 69</button>
                            <button>Comment -69</button>
                        </p>
                    </fieldset>
                    <fieldset>
                        <img src={Profile}></img>
                        User
                        <p>
                            <h1>Are there cures for mental health problems?</h1>
                            It is often more realistic and helpful to find out what helps with the issues you face. Talking, counselling, medication, friendships, exercise, good sleep and nutrition, and meaningful occupation can all help.
                            <br/><button>Like - 69</button>
                            <button>Comment -69</button>
                        </p>
                    </fieldset>
                    <fieldset>
                        <img src={Profile}></img>
                        User
                        <p>
                            <h1>Are there cures for mental health problems?</h1>
                            It is often more realistic and helpful to find out what helps with the issues you face. Talking, counselling, medication, friendships, exercise, good sleep and nutrition, and meaningful occupation can all help.
                            <br/><button>Like - 69</button>
                            <button>Comment -69</button>
                        </p>
                    </fieldset>
                </span>
            </div>
            <div className="divBlog4">
                <h1>For You</h1>
                <span className="spn1Blog4">   
                    <fieldset>
                        <img src={Profile}></img>
                        User
                        <p>
                            <h1>Are there cures for mental health problems?</h1>
                            It is often more realistic and helpful to find out what helps with the issues you face. Talking, counselling, medication, friendships, exercise, good sleep and nutrition, and meaningful occupation can all help.
                            <br/><button>Like - 69</button>
                            <button>Comment -69</button>
                        </p>
                    </fieldset>
                    <fieldset>
                        <img src={Profile}></img>
                        User
                        <p>
                            <h1>Are there cures for mental health problems?</h1>
                            It is often more realistic and helpful to find out what helps with the issues you face. Talking, counselling, medication, friendships, exercise, good sleep and nutrition, and meaningful occupation can all help.
                            <br/><button>Like - 69</button>
                            <button>Comment -69</button>
                        </p>
                    </fieldset>
                </span>
                <span className="spn2Blog4">
                    <button>Browse More</button>
                </span>
            </div>
            <div className="divBlog5">
                <h1>Recommended Topics</h1>
                <button>Stress</button>
                <button>Frequent Emotional</button>
                <button>Self-harm behavior</button>
                <button>Anger</button>
                <button>Social Withdrawal</button>
                <button>Sad</button>
                <button>Depression</button>
                <button>Energy Draining</button>
            </div>
            <Footer />
        </div>
    )
}

export default MainBlog;