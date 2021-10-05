import React, {useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import LoginForm from './components/LoginForm/LoginForm';
import NetForm from './components/Netbanking';
import OnlineForm from './components/Onlinebanking';
import AEPSForm from './components/AEPS';
import Admin from './layouts/Admin';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,HashRouter
} from "react-router-dom";
import AlertComponent from './components/AlertComponent/AlertComponent';  
function App() {
  const [title, updateTitle] = useState(null);
  const [errorMessage, updateErrorMessage] = useState(null);
  return (
    <HashRouter>
    <div className="App">
          <Switch>
            <Route path="/" exact={true}>
              <LoginForm showError={updateErrorMessage} updateTitle={updateTitle}/>
            </Route>
            <Route path="/login">
              <LoginForm showError={updateErrorMessage} updateTitle={updateTitle}/>
            </Route>
            <Route path="/netbanking">
              <NetForm showError={updateErrorMessage} updateTitle={updateTitle}/>
            </Route>
            <Route path="/onlinebanking">
              <OnlineForm showError={updateErrorMessage} updateTitle={updateTitle}/>
            </Route>
            <Route path="/aeps">
              <AEPSForm showError={updateErrorMessage} updateTitle={updateTitle}/>
            </Route>
            <Route path="/Admin">
              <Admin showError={updateErrorMessage} updateTitle={updateTitle}/>
            </Route>
            <Redirect from="/" to="/login" />
          </Switch>
          {/* <AlertComponent errorMessage={errorMessage} hideError={updateErrorMessage}/> */}
    </div>
    </HashRouter>
  );
}

export default App;
