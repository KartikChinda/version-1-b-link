import React from 'react';
import Login from './Components/Signup/Login';
import SignUp from './Components/Signup/Signup';
import EventApp from './Components/Events/EventApp';
const App = () => {
  return (
    <div>
      <EventApp />
      <SignUp />

      <Login />
    </div>
  );
};

export default App;
