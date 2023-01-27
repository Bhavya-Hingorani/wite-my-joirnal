import React, { useState } from 'react';
import './App.css';
import NumericInput from './components/numericInput';
import QuestionInput from './components/questionInput';
import GenerateButton from './components/generateButton';

function App() {
  return (
    <div className="container" style={{ backgroundColor: "#F5F5F5" }}>
      <h1 className="app-title text-center" style={{ color: "#4CAF50" }}>My Day Journal</h1>
      <p className="text-center">
                    Hello, welcome to My Day Journal, an application that is designed to help you keep track of various aspects of your day.
                </p>
                <p className="text-center">
                    To use the application, you will find multiple Numeric Inputs on the page, each labeled with a metric you can track such as sleep, steps, exercise, water intake, time spent working, time spent on leisure activities, money spent, and screen time. You can click on the plus and minus buttons to increase or decrease the value of each metric respectively.
                </p>
                <p className="text-center">
                    Additionally, you will find a Question and answer feature, where you can answer some questions regarding your day. You can write your answer in the text box provided.
                </p>
                <p className='text-center'>
                Once you have entered your values, you can click the 'generate' button to create a journal entry for the day. Happy journaling!
                </p>
      <NumericInput label="Sleep" />
      <NumericInput label="Steps" />
      <NumericInput label="Exercise" />
      <NumericInput label="Water" />
      <NumericInput label="Time spent on work (hrs)" />
      <NumericInput label="Leisure time spent (hrs)" />
      <NumericInput label="Money spent" />
      <NumericInput label="Screen time" />

      <QuestionInput question="What did you accomplish today?" />
      <QuestionInput question="What are you grateful for today?" />
      <QuestionInput question="What are your plans for tomorrow?" />

      <GenerateButton/>
    </div>
  );
}


export default App;