function StartScreen({ numberLength, func }) {
  return (
    <div className="start">
      <h2>Welome to The React Quiz!</h2>
      <h3>{numberLength} question to test your React mastery</h3>
      <button className="btn btn-ui" onClick={() => func({ type: "start" })}>
        Let's start
      </button>
    </div>
  );
}

export default StartScreen;
