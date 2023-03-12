import React, { useState } from "react";
import "./App.css";

const data = [
  {
    question: "Question 1 ?",
    answer:
      "Atoms in Recoil are the basic building blocks for state management in a Recoil application. They represent a piece of state that can be read and updated by multiple components in your app. Atoms can be thought of as a substitute for state variables in traditional React applications.",
  },
  {
    question: "Question 2 ?",
    answer:
      "useRecoilValue is a Recoil hook that lets a component read the value of an Atom. It takes the Atom as its argument and returns the current value of the Atom. The component will re-render whenever the Atom's value changes.",
  },
  {
    question: "Question 3 ?",
    answer:
      "A Router in React is used to manage the navigation between different pages or views in a single-page application. It allows you to declaratively define the mapping between URLs and the components that should be rendered for those URLs.",
  },
];

function App() {
  const [selected, setselected] = useState();

  const toggle = (i) => {
    if (selected == i) {
      return setselected(null);
    }
    setselected(i);
  };

  return (
    <div className="App">
      <div className="accordian">
        {data.map((item, i) => (
          <div className="item">
            <div className="title" onClick={() => toggle(i)}>
              <h2>{item.question}</h2>
              <span>{selected == i ? "-" : "+"}</span>
            </div>
            <div className={selected == i ? "show" : "content"}>
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
