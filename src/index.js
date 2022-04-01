import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import MarkdownPage from "./common/MarkdownPage";
import QaRobot from "./qa_executor/QaRobot";
import Anniversary from "./anniversary/Anniversary";
import BackendTest from "./backend_test/BackendTest";
import Error from "./common/Error";
import App from "./App";

function Log() {
  return <MarkdownPage url="/md/log.md"/>;
}

function Home() {
  return <MarkdownPage url="/md/home.md"/>;
}

ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App/>}>
            <Route index element={<Home/>}/>
            <Route path="anniversary" element={<Anniversary/>}/>
            <Route path="qa_robot" element={<QaRobot/>}/>
            <Route path="backend_test" element={<BackendTest/>}/>
            <Route path="dev_log" element={<Log/>}/>
            <Route path="*" element={<Error/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
