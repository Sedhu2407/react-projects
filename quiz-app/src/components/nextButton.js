function NextButton({ dispatch, answer, numberLength, ind }) {
  if (answer === null) return null;
  if (numberLength - 1 > ind) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
  }
  if (numberLength - 1 === ind) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finished" })}
      >
        Finish
      </button>
    );
  }
}

export default NextButton;
