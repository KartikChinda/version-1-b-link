import React from 'react';
import { Routes, Route } from 'react-router-dom';

import SignUp from './Components/Signup/Signup';
import LogIn from './Components/Signup/Login';
import PersonalizeMinistry from './Components/Signup/PersonalizeMinistry';

const App = () => {
  return (
    <div>
      <div className="App">
        <Routes>
          <Route
            path="/signup"
            element={
              <SignUp/>
            }
          />
          <Route
            path="/login"
            element={
              <LogIn/>
            }
          />
          <Route
            path="/personalize-ministry"
            element={
              <PersonalizeMinistry/>
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
