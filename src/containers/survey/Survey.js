/* eslint-disable */
import React from "react";
import PieChart from "./PieChart"
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
    <div className="gpt3__survey section__padding">
    <div id="survey">
      <div className="gpt3__survey-heading">
      <h1 className="heading-container ">Asiakastyytyväisyys 2023</h1>
      </div>
      <div className="gpt3__survey-container">
        <div className="legend-container">
  <div className="legend">
      <div className="legend-item">
        <div className="legend-color green"></div>
        <span>Kyllä</span>
      </div>
      <div className="legend-item">
        <div className="legend-color red"></div>
        <span>Ei</span>
      </div>
      <div className="legend-item">
        <div className="legend-color gray"></div>
        <span>Ei Vastausta</span>
      </div>
        </div>
    </div>
    <div style={{marginTop: 65}}>
    {surveyData.map((survey) => (
              <div key={survey.id} className="survey-questions">
                <div className="question">
                  <p>{survey.data}</p>
                </div>
                <div className="bar" style={{ backgroundColor: survey.id === 5 ? 'gray' : '#d88a8a'}}>
                  <div
                    className="progress"
                    style={{ width: `${survey.percentage}%` }}
                  >
                    <p>{survey.percentage}%</p>
                  </div>
                </div>
              </div>
            ))}
    </div>
      <PieChart />
      </div>
    </div>
    </div>
  );
};

export default Survey;