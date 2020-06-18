import React from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
const Count = () => {
  const count = useStoreState((state) => state.count.count);
  const { increase, decrease } = useStoreActions((actions) => ({
    increase: actions.count.increaseCount,
    decrease: actions.count.decreaseCount,
  }));
  return (
    <div className="counter-container">
      <div>
        <button onClick={() => increase()}>Increase</button>
      </div>
      <div>
        <strong>{count}</strong>
      </div>
      <div>
        <button onClick={() => decrease()}>Decrease</button>
      </div>
    </div>
  );
};

export default Count;
