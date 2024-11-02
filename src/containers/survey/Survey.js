import React from 'react';
import PieChart from './PieChart';
import './Survey.css';

const Survey = ({ translate }) => {
  const surveyData = [
    {
      id: 1,
      data: 'survey_language',
      percentage: 95,
    },
    {
      id: 2,
      data: 'survey_treatment',
      percentage: 100,
    },
    {
      id: 3,
      data: 'survey_satisfaction',
      percentage: 100,
    },
    {
      id: 4,
      data: 'survey_goal',
      percentage: 100,
    },
    {
      id: 5,
      data: 'survey_punctuality?',
      percentage: 90,
    },
    {
      id: 6,
      data: 'survey_effort',
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
                <div className="legend-color green" />
                <span>{translate('yes')}</span>
              </div>
              <div className="legend-item">
                <div className="legend-color red" />
                <span>{translate('no')}</span>
              </div>
              <div className="legend-item">
                <div className="legend-color gray" />
                <span>{translate('no_answer')}</span>
              </div>
            </div>
          </div>
          <div style={{ marginTop: 65 }}>
            {surveyData.map((survey) => (
              <div key={survey.id} className="survey-questions">
                <div className="question">
                  <p>{translate(survey.data)}</p>
                </div>
                <div className="bar" style={{ backgroundColor: survey.id === 5 ? 'gray' : '#d88a8a' }}>
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
