import Option from "./options";
function Question({ questions, dispatchfun, ans }) {
  return (
    <div>
      <h4>{questions.question}</h4>
      <Option
        option={questions}
        dispatchfun={dispatchfun}
        answer={ans}
      ></Option>
    </div>
  );
}

export default Question;
