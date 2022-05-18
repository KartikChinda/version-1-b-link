import React from 'react';
import { Routes, Route } from 'react-router-dom';

import SignUp from './Components/Signup/Signup';
import LogIn from './Components/Signup/Login';
const App = () => {
  return (
    <div>
      <div className="App">
        <Routes>
          <Route
            path="/signup"
            element={
              <SignUp></SignUp>
            }
          />
          <Route
            path="/login"
            element={
              <LogIn></LogIn>
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
