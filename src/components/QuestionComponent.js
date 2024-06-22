// src/components/QuestionComponent.js
import React from 'react';

const QuestionComponent = ({ question }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{question}</h5>
      </div>
    </div>
  );
};

export default QuestionComponent;
