import React, { useState } from "react";
import "./step.css";

const message = ["Learn React", "Apply for job", "Invest all the money"];

function Step() {
  const [messages, setMessages] = useState(1);
  const handleNextEvent = () => {
    if (messages > 2) {
      return;
    }
    setMessages(messages + 1);
  };
  const handlePreviousEvent = () => {
    if (messages < 2) {
      return;
    }
    setMessages(messages - 1);
  };
  return (
    <div className="steps">
      <div className="numbers">
        <div className={messages === 1 ? "active" : ""}>1</div>
        <div className={messages === 2 ? "active" : ""}>2</div>
        <div className={messages === 3 ? "active" : ""}>3</div>
      </div>
      <div className="message">
        {
          <div>
            step {messages} : {message[messages - 1]}
          </div>
        }
      </div>

      <div className="buttons">
        <button onClick={handlePreviousEvent}>Previous</button>
        <button onClick={handleNextEvent}>Next</button>
      </div>
    </div>
  );
}

export default Step;
