
import './App.css';
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';
import { TeamPage } from './pages/TeamPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Fragment>
          <Routes>
            <Route exact path="/teams:teamName" element={<TeamPage />}>

            </Route>
          </Routes>
        </Fragment>
      </Router>

    </div>
  );
}

export default App;
