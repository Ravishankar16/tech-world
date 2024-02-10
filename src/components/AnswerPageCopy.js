import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const AnswerPage = ({ queList }) => {
  const { questionId } = useParams();
  const [question, setQuestion] = useState(null);
  const [answerText, setAnswerText] = useState('');
  const [commentText, setCommentText] = useState('');

  useEffect(() => {
    // Fetch question details based on questionId and set the state
    const fetchQuestionDetails = async () => {
      const selectedQuestion = queList.questions.find((q) => q.id === questionId);
      setQuestion(selectedQuestion);
    };

    fetchQuestionDetails();
  }, [questionId, queList.questions]);

  const submitAnswer = () => {
    if (answerText.trim() === '') {
      // Handle empty answer
      return;
    }

    const newAnswer = {
      id: `a${question.answers.length + 1}`,
      content: answerText,
      userId: 'u1', // Assuming a static user for now
      comments: [],
    };

    const updatedQuestion = { ...question, answers: [...question.answers, newAnswer] };
    setQuestion(updatedQuestion);
    setAnswerText('');
  };

  const submitComment = (answerId) => {
    if (commentText.trim() === '') {
      // Handle empty comment
      return;
    }

    const newComment = {
      id: `c${question.answers.find((a) => a.id === answerId).comments.length + 1}`,
      content: commentText,
      userId: 'u1', // Assuming a static user for now
    };

    const updatedQuestion = {
      ...question,
      answers: question.answers.map((a) =>
        a.id === answerId ? { ...a, comments: [...a.comments, newComment] } : a
      ),
    };

    setQuestion(updatedQuestion);
    setCommentText('');
  };

  if (!question) {
    return <div>Loading...</div>; // You can replace this with a loading spinner or other UI
  }

  return (
    <div>
      <h1>{question.title}</h1>
      <p>{question.content}</p>

      <h2>Answers</h2>
      <ul>
        {question.answers.map((answer) => (
          <li key={answer.id}>
            <p>{answer.content}</p>
            <ul>
              {answer.comments.map((comment) => (
                <li key={comment.id}>
                  <p>{comment.content}</p>
                </li>
              ))}
            </ul>
            <input
              type="text"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Add a comment"
            />
            <button onClick={() => submitComment(answer.id)}>Submit Comment</button>
          </li>
        ))}
      </ul>

      <input
        type="text"
        value={answerText}
        onChange={(e) => setAnswerText(e.target.value)}
        placeholder="Your Answer"
      />
      <div>
        <label>Select User: </label>
        <select value={selectedUser} onChange={(e) => setSelectedUser(e.target.value)}>
          <option value="">Select User</option>
          {queList.users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.displayName}
            </option>
          ))}
        </select>
      </div>
      <button onClick={submitAnswer}>Submit Answer</button>
    </div>
  );
};

export default AnswerPage;
