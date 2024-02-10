import './App.css';
import Head from './components/Head';
import Body from './components/Body';
import ToPushFetch from './components/ToPushFetch';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import MainContainer from './components/MainContainer';
import AnswerPage from './components/AnswerPage';


const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body/>,
  children: [
    {
      path: "/",
      element: <MainContainer/>,
    },
    {
      path: "answer",
      element:<AnswerPage/>,
    }
  ]

}])

function App() {
  return (
    <div>
      <Head/>
      <RouterProvider router={appRouter} />
      {/* <ToPushFetch/> */}
    </div>
  );
}

export default App;
