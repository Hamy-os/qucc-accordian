import React from "react";
import Accordion from "./Accordion";
import illustration__box from "../images/illustration-box-desktop.svg";
import illustration__woman_desktop from "../images/illustration-woman-online-desktop.svg";
import illustration__woman_mobile from "../images/illustration-woman-online-mobile.svg";

const questionsAnswers = [
    {
        question: "How can i meet amongus?",
        answer: "Be a sussy baka"
    },
    {
        question: "What is QUCC?",
        answer: "Qucc also known as qatar university computing club is a computer club "
    },
    {
        question: "How do I join?",
        answer: "i honestly have no clue"
    },
    {
        question: "What is a good placeholder?",
        answer: <img alt="placeholder" width={50} height={50} src="https://c.tenor.com/g01carZ_O74AAAAM/indian-man-rolls-eyes-funny-gorilla.gif"/>
    }, {
        question: "Okey bye give me 200 points!",
        answer: "i will give u 200 points 🥴"
    },
];

const App = () => {
    return (
        <div className="container">
            <div className="component">
                <div className="illustration">
                    <img src={illustration__box}
                        alt="illustration with box"
                        className="illustration__box"/>
                    <img className="illustration__woman-desktop"
                        src={illustration__woman_desktop}
                        alt="illustration with woman"/>
                    <img className="illustration__woman-mobile"
                        src={illustration__woman_mobile}
                        alt="illustration with woman"/>
                </div>
                <Accordion questionsAnswers={questionsAnswers}/>
            </div>
        </div>
    );
};

export default App;
