const queList = {
  users: [
    {
      id: "u1",
      username: "ravi_infineon",
      displayName: "Ravi",
    },
    {
      id: "u2",
      username: "shankar_infineon",
      displayName: "Shankar",
    },
  ],
  questions: [
    {
      id: "q1",
      title: "Fastest way to convert a number to radix 64 in JavaScript?",
      content:
        "I'm new to React and want to create a simple component. Can someone guide me?Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML?",
      category: "javascript",
      userId: "u1",
      answers: [
        {
          id: "a1",
          content:
            "To create a React component, you need to use the `React.Component` class...",
          userId: "u2",
          comments: [
            {
              id: "c1",
              content: "Great explanation! Can you provide an example?",
              userId: "u1",
            },
            {
              id: "c2",
              content: "I'm having issues with state management. Any tips?",
              userId: "u2",
            },
          ],
        },
        {
          id: "a2",
          content:
            "Another approach is to use functional components with hooks...",
          userId: "u1",
          comments: [],
        },
      ],
    },
    {
      id: "q2",
      title: "What is the difference between React Native and React?",
      content:
        "I've heard about the useState hook in React. I am trying to add a RecyclerView to a fragment, but without success. I have followed this guide, but in there the RecyclerView is added to MainActivity, so I tried to adapt it. However, I cannot get the RecyclerView to show up?",
      category: "react",
      userId: "u2",
      answers: [
        {
          id: "a3",
          content:
            "In functional components, you can use the `useState` hook to manage state...",
          userId: "u1",
          comments: [
            {
              id: "c3",
              content: "Does `useState` work with class components too?",
              userId: "u2",
            },
          ],
        },
      ],
    },
    {
      id: "q3",
      title:
        "Benchmarking with Pytest Parallelized Cython Code results in Fatal Python Error?",
      content:
        "I saw similar questions here, but I do not think they address my issue,Running debugger in VSCode I got more information on the error in VSCode I got more information on the error?",
      category: "python",
      userId: "u2",
      answers: [
        {
          id: "a4",
          content:
            "In functional components, you can use the `useState` hook to manage state...",
          userId: "u1",
          comments: [
            {
              id: "c4",
              content: "Does `useState` work with class components too?",
              userId: "u2",
            },
          ],
        },
      ],
    },
  ],
};

export default queList;
