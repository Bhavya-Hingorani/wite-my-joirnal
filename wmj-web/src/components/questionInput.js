import React, { useState } from "react";

const QuestionInput = ({ question }) => {
  const [answer, setAnswer] = useState("");

  return (
    <div className="question-answer my-4">
      <input 
        className="form-control mx-3" 
        style={{width: '350px'}} 
        type="text" 
        value={question} 
        disabled 
      />
      <div className="input-group">
        <textarea className="form-control h-100 border border-secondary rounded" rows="5"></textarea>
      </div>
    </div>
  );
};

export default QuestionInput;