// src/pages/AllQuestions.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllQuestions } from '../firebaseMethods';
import QuestionComponent from '../components/QuestionComponent';

const AllQuestions = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      const questions = await getAllQuestions();
      setQuestions(questions);
    };
    fetchQuestions();
  }, []);

  return (
    <div className="container">
      <h1>All Questions</h1>
      {questions.map((question) => (
        <Link to={`/question/${question.id}`} key={question.id}>
          <QuestionComponent question={question.question} />
        </Link>
      ))}
    </div>
  );
};

export default AllQuestions;
