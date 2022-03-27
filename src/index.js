import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./HomePage"
import QAScriptExecutor from "./QAScriptExecutor"
import Anniversary from "./Anniversary"
import Error from "./Error"

ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App/>}>
            <Route index element={<HomePage/>}/>
            <Route path="anniversary" element={<Anniversary/>}/>
            <Route path="homepage" element={<HomePage/>}/>
            <Route path="qa_robot" element={<QAScriptExecutor/>}/>
            <Route path="*" element={<Error/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
