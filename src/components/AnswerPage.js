import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const AnswerPage = ({ queList }) => {
  const { questionId } = useParams();
  const [question, setQuestion] = useState(null);
  const [answerText, setAnswerText] = useState("");
  const [commentText, setCommentText] = useState("");

  useEffect(() => {
    // fetch and set the details of the selected question based on the questionId
    const fetchQuestionDetails = async () => {
      const selectedQuestion = queList.questions.find(
        (q) => q.id === questionId
      );
      setQuestion(selectedQuestion);
    };

    fetchQuestionDetails();
  }, [questionId, queList.questions]);
  // to handle the submission of answers
  const submitAnswer = () => {
    if (answerText.trim() === "") {
      // Handle empty answer
      return;
    }
    // new answers
    const newAnswer = {
      id: `a${question.answers.length + 1}`,
      content: answerText,
      // Assuming a static user for now
      userId: "u1", 
      comments: [],
    };

    const updatedQuestion = {
      ...question,
      answers: [...question.answers, newAnswer],
    };
    setQuestion(updatedQuestion);
    setAnswerText("");
  };
  // to handle the submission of answers
  const submitComment = (answerId) => {
    if (commentText.trim() === "") {
      // Handle empty comment
      return;
    }
    // new comments
    const newComment = {
      id: `c${
        question.answers.find((a) => a.id === answerId).comments.length + 1
      }`,
      content: commentText,
      // Assuming a static user for now
      userId: "u1", 
    };
    // add the new question with the existing list
    const updatedQuestion = {
      ...question,
      answers: question.answers.map((a) =>
        a.id === answerId ? { ...a, comments: [...a.comments, newComment] } : a
      ),
    };

    setQuestion(updatedQuestion);
    setCommentText("");
  };

  if (!question) {
    return <div>Loading...</div>; // You can replace this with a loading spinner or other UI
  }

  return (
    <div className="px-10">
      <h1 className=" pt-6 text-2xl font-bold text-blue-500">
        {question.title}
      </h1>
      <p className="w-3/4 px-5 pt-2">{question.content}</p>

      <h2 className="text-xl font-bold text-emerald-500">Answers</h2>
      <ul>
        {question.answers.map((answer) => (
          <li key={answer.id} className="px-10">
            <p>{answer.content}</p>
            <ul>
              {answer.comments.map((comment) => (
                <li key={comment.id} className="px-10">
                  <p>{comment.content}</p>
                </li>
              ))}
            </ul>
            <input
              className="px-10"
              type="text"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Add a comment"
            />
            <button
              className="text-emerald-500 font-bold px-2"
              onClick={() => submitComment(answer.id)}
            >
              Reply
            </button>
          </li>
        ))}
      </ul>
      <input
        className="border border-gray-400"
        type="text"
        value={answerText}
        onChange={(e) => setAnswerText(e.target.value)}
        placeholder="Your Answer"
      />

      <button
        className="text-emerald-500 font-bold px-2 "
        onClick={submitAnswer}
      >
        Answer
      </button>
    </div>
  );
};

export default AnswerPage;
