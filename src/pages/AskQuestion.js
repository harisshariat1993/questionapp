// src/pages/AskQuestion.js
import React, { useState } from 'react';
import Input from '../components/Input';
import CustomButton from '../components/Button';
import { addQuestion } from '../firebaseMethods';

const AskQuestion = () => {
  const [question, setQuestion] = useState('');

  const handleAddQuestion = async () => {
    await addQuestion(question);
    setQuestion('');
  };

  return (
    <div className="container">
      <h1>Ask a Question</h1>
      <Input value={question} onChange={(e) => setQuestion(e.target.value)} />
      <CustomButton onClick={handleAddQuestion}>Add Question</CustomButton>
    </div>
  );
};

export default AskQuestion;
