function Options({ option, dispatchfun, answer }) {
  const hasAnswered = answer !== null;
  return (
    <div className="options">
      {option.options.map((e, i) => (
        <button
          className={`btn btn-option ${i === answer ? "answer" : ""} ${
            hasAnswered
              ? i === option.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={i}
          onClick={() => dispatchfun({ type: "newAnswer", payload: i })}
          disabled={hasAnswered}
        >
          {e}
        </button>
      ))}
    </div>
  );
}
export default Options;
