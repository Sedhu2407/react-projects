import React, { useState } from "react";
import "./App.css";
import Logo from "./travelComponents/logo";
import Form from "./travelComponents/form";
import PackageList from "./travelComponents/packageList";
import Stats from "./travelComponents/stats";

function App() {
  const [arr, setArr] = useState([]);
  const getData = (e) => {
    setArr((arr) => [...arr, e]);
  };
  const delHandle = (id) => {
    setArr((arr) => arr.filter((item) => item.id !== id));
  };

  const changedHandle = (id) => {
    setArr((arr) =>
      arr.map((item) =>
        item.id === id ? { ...item, isPacked: !item.isPacked } : item
      )
    );
  };
  const clearData = () => {
    setArr([]);
  };

  return (
    <div className="app">
      <Logo></Logo>
      <Form onGetData={getData}></Form>
      <PackageList
        sendData={arr}
        handleDeleteItem={delHandle}
        handleChangeData={changedHandle}
        clearList={clearData}
      ></PackageList>
      <Stats data={arr}></Stats>
    </div>
  );
}

export default App;
