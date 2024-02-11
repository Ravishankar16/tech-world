import './App.css';
import Head from './components/Head';
import Body from './components/Body';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from './components/MainContainer';
import AnswerPage from './components/AnswerPage';
import queList from './queList'; // Import your queList data

const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body />,
  children: [
    {
      path: "/",
      element: <MainContainer />,
    },
    {
      path: "answer/:questionId", // Updated path with a parameter for questionId
      element: <AnswerPage queList={queList} />, // Pass queList as a prop
    }
  ]

}])

function App() {
  return (
    <div>
      <Head />
      <RouterProvider router={appRouter} />
      {/* <ToPushFetch/> */}
    </div>
  );
}

export default App;
