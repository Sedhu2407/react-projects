import React, { useEffect, useReducer } from "react";
import Header from "./components/header";
import Main from "./components/main";
import Loader from "./components/Loader";
import Error from "./components/Error";
import StartScreen from "./components/startScreen";
import Question from "./components/question";
import NextButton from "./components/nextButton";
import Progress from "./components/progress";
import FinishScreen from "./components/finishScreen";
const initialState = {
  question: [],
  status: "isLoading",
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
};
function reducer(state, action) {
  switch (action.type) {
    case "datafetched":
      return { ...state, question: action.payload, status: "ready" };
    case "datafailed":
      return { ...state, status: "error" };
    case "start":
      return { ...state, status: "active" };
    case "newAnswer":
      const ques = state.question.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === ques.correctOption
            ? state.points + ques.points
            : state.points,
      };
    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };

    case "finished":
      return {
        ...state,
        status: "finished",
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };

    case "reset":
      return {
        ...state,
        status: "ready",
        index: 0,
        answer: null,
        points: 0,
      };
    default:
      throw new Error("ation unknown");
  }
}
function App() {
  const [{ question, status, index, answer, points, highscore }, dispatch] =
    useReducer(reducer, initialState);

  const questionLength = question.length;
  const totalPoints = question.reduce((pre, curr) => pre + curr.points, 0);
  useEffect(function () {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "datafetched", payload: data }))
      .catch((err) => dispatch({ type: "datafailed" }));
  }, []);
  return (
    <div className="app">
      <Header></Header>
      <Main>
        {status === "isLoading" && <Loader></Loader>}
        {status === "error" && <Error></Error>}
        {status === "ready" && (
          <StartScreen
            numberLength={questionLength}
            func={dispatch}
          ></StartScreen>
        )}
        {status === "active" && (
          <>
            <Progress
              index={index}
              numberLength={questionLength}
              pts={points}
              maxpoints={totalPoints}
              ans={answer}
            ></Progress>
            <Question
              questions={question[index]}
              dispatchfun={dispatch}
              ans={answer}
            ></Question>
            <NextButton
              dispatch={dispatch}
              answer={answer}
              numberLength={questionLength}
              ind={index}
            ></NextButton>
          </>
        )}
        {status === "finished" && (
          <FinishScreen
            pts={points}
            maxPossiblepoints={totalPoints}
            high={highscore}
            disp={dispatch}
          ></FinishScreen>
        )}
      </Main>
    </div>
  );
}

export default App;
