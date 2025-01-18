import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
  const initialState = [
    { id: 0, value: 0, name: "Useless item" },
    { id: 1, value: 0, name: "Spoon" },
    { id: 2, value: 0, name: "Fork" },
    { id: 3, value: 0, name: "Plate" },
    { id: 4, value: 0, name: "Minimal Set" },
  ];

  const [counters, setCounters] = useState(initialState);

  const handleIncrement = (id) => {
    const elementIndex = counters.findIndex((c) => c.id === id);
    const newCounters = [...counters];
    newCounters[elementIndex].value++;
    setCounters(newCounters);
  };

  const handleDecrement = (id) => {
    const elementIndex = counters.findIndex((c) => c.id === id);
    const newCounters = [...counters];
    newCounters[elementIndex].value--;
    setCounters(newCounters);
  };

  const handleDelete = (id) => {
    console.log(handleDelete, id);
    const newCounter = counters.filter((c) => c.id !== id);
    setCounters(newCounter);
  };

  const handleReset = () => {
    setCounters(initialState);
  };

  return (
    <>
      <div className="d-flex align-items-center flex-column m-2">
        {counters.map((count) => (
          <Counter
            key={count.id}
            onDelete={handleDelete}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            {...count}
          ></Counter>
        ))}
      </div>
      <div className="container">
        <div className="text-center">
          <button className="btn btn-primary btn-sm ms-5" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default CountersList;
