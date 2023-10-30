/* eslint-disable */
import React from "react";
import "./Survey.css";

const Survey = () => {
  const surveyData = [
    {
      id: 1,
      data: "Oletko pystynyt keskustelemaan siivoojan kanssa suomen/ruotsin kielellä?",
      percentage: 95,
    },
    {
      id: 2,
      data: "Oletko saanut siivoojalta asiallista kohtelua?",
      percentage: 100,
    },
    {
      id: 3,
      data: "Oletko ollut tyytyväinen tehtyyn siivoustyöhön?",
      percentage: 100,
    },
    {
      id: 4,
      data: "Onko siivooja ottanut huomioon toiveesi siivouksen toteutuksessa?",
      percentage: 100,
    },
    {
      id: 5,
      data: "Onko siivooja tullut kotiisi sovittuna aikana siivoamaan?",
      percentage: 90,
    },
    {
      id: 6,
      data: "Onko asiointi palveluntuottajan kanssa ollut vaivatonta?",
      percentage: 95,
    },
  ];
  return (
    <div className="gpt3__survey">
    <div id="survey">
      <div className="gpt3__survey-heading">
      <h1 className="heading-container ">Asiakastyytyväisyys 2023</h1>
      </div>
      <div className="gpt3__survey-container">
      {surveyData.map((survey) => (
              <div key={survey.id} className="survey-questions">
                <div className="question">
                  <p>{survey.data}</p>
                </div>
                <div className="bar">
                  <div
                    className="progress"
                    style={{ width: `${survey.percentage}%` }}
                  />
                </div>
              </div>
            ))}
      </div>
    </div>
    </div>
  );
};

export default Survey;