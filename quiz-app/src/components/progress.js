function Progress({ index, numberLength, pts, maxpoints, ans }) {
  return (
    <header className="progress">
      <progress
        max={numberLength}
        value={index + Number(ans !== null)}
      ></progress>
      <p>
        Question <strong>{index + 1}</strong>/{numberLength}
      </p>
      <p>
        <strong>{pts}</strong>/{maxpoints}
      </p>
    </header>
  );
}

export default Progress;
