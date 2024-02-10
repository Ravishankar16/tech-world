import React, { useState } from 'react';

const AnswerPage = ({ question, onAddAnswer, onAddComment }) => {
  const [newAnswer, setNewAnswer] = useState('');
  const [newComment, setNewComment] = useState('');

  const handleAddAnswer = () => {
    onAddAnswer(question.id, newAnswer);
    setNewAnswer('');
  };

  const handleAddComment = () => {
    onAddComment(question.id, newComment);
    setNewComment('');
  };

  return (
    <div>
      <h1 className='text-2xl font-bold text-blue-500'>{question.title}</h1>
      <p>{question.content}</p>

      <h2>Answers:</h2>
      <ul>
        {question.answers.map((answer) => (
          <li key={answer.id}>
            <p>{answer.content}</p>
            {/* Display comments for each answer */}
            <ul>
              {answer.comments.map((comment) => (
                <li key={comment.id}>
                  <p>{comment.content}</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      {/* Input for adding a new answer */}
      <input
        type='text'
        value={newAnswer}
        onChange={(e) => setNewAnswer(e.target.value)}
        placeholder='Add your answer'
      />
      <button onClick={handleAddAnswer}>Submit Answer</button>

      {/* Input for adding a new comment */}
      <input
        type='text'
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder='Add your comment'
      />
      <button onClick={handleAddComment}>Submit Comment</button>
    </div>
  );
};

export default AnswerPage;
