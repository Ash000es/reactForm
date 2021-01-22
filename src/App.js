import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Step1 from "./Step1";
import Step2 from "./Step2";

function App() {
  return (
    <Router>
      <div className={'App'}>
        <Switch>
          <Route exact path="/">
            <Step1/>
          </Route>
          <Route exact path="/step1">
            <Step1/>
          </Route>
          <Route exact path="/step2">
            <Step2/>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}


export default App;
