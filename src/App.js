// App.js
import React from 'react';
import Questionnaire from './components/Questionnaire';

function App() {
  return (
    <div className="bg-purple-300 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-white my-8">Brightness JND Questionnaire</h1>
      <div className="bg-white p-4 rounded-md shadow-md">
        {/* Your form component or other content goes here */}
        <Questionnaire />
      </div>
    </div>
  );
}

export default App;
