// src/pages/Question.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getQuestionById } from '../firebaseMethods';

const Question = () => {
  const { id } = useParams();
  const [question, setQuestion] = useState(null);

  useEffect(() => {
    const fetchQuestion = async () => {
      const question = await getQuestionById(id);
      setQuestion(question);
    };
    fetchQuestion();
  }, [id]);

  return (
    <div className="container">
      <h1>Question Detail</h1>
      {question ? (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{question.question}</h5>
            <p className="card-text"><small className="text-muted">{question.createdAt.toDate().toString()}</small></p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Question;
