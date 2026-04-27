import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decreaseAction, increaseAction } from "../store/slices/counterSlice";

function Counter() {
  const { count } = useSelector((state) => state.counterSlice);
  const dispatch = useDispatch();
  const increase = () => {
    dispatch(increaseAction());
  };

  const decrease = () => {
    dispatch(decreaseAction());
  };
  return (
    <div className="container p-5 alert alert-info mt-5">
      <h1 className="text-3xl font-bold">Counter</h1>
      <button className="btn btn-outline-primary" onClick={increase}>
        +
      </button>
      <span className="mx-3 fw-bold">{count}</span>
      <button className="btn btn-outline-danger" onClick={decrease}>
        -
      </button>
    </div>
  );
}

export default Counter;
