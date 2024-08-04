function FinishScreen({ pts, maxPossiblepoints, high, disp }) {
  const percentage = (pts / maxPossiblepoints) * 100;
  return (
    <>
      <p className="result">
        You scroed <strong>{pts}</strong> out of {maxPossiblepoints} (
        {Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore:{high} points)</p>
      <button className="btn btn-ui" onClick={() => disp({ type: "reset" })}>
        Retake Quiz
      </button>
    </>
  );
}

export default FinishScreen;
