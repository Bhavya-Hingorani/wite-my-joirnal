import { useState } from 'react';

function GenerateButton() {
  const [journalEntry, setJournalEntry] = useState('');

  const handleClick = async () => {
    // // Collect data from NumericInput and QuestionInput components
    // const numericInputData = "Water: 7"
    // const questionInputData = "How was your day?: Not bad"

    // // Call GPT-3 API using collected data
    // const response = await fetch('https://api.openai.com/v1/engines/davinci/completions', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${apiKey}`
    //   },
    //   body: JSON.stringify({
    //     prompt: `Journal entry for ${numericInputData} and ${questionInputData}`,
    //     max_tokens: 100
    //   })
    // });
    // const json = await response.json();
    setJournalEntry("Today, I made sure to prioritize my physical and mental well-being by getting 9 hours of sleep, taking 4000 steps, and dedicating 1 hour to exercise. I also made sure to stay hydrated by drinking 7 cups of water. Unfortunately, I didn't accomplish anything productive today as I spent my entire day on leisure activities. But, I am grateful for the closest friendships I have and my luck. As for tomorrow, I plan to start working on an app that can automatically journal my day. This will help me to balance my screen time and be more productive. Overall, it was a nice break today but I know that I need to focus on being productive as well.");
  }

  return (
    <div className="container">
        <button className="btn btn-primary" onClick={handleClick}>
            Generate
        </button>
        <h1 className="app-title text-center">Your journal entry for the day</h1>
        <p className="text-center">{journalEntry}</p>
    </div>

  );
}

export default GenerateButton   ;