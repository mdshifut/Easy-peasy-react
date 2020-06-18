import { action } from "easy-peasy";

export default {
  count: 0,
  increaseCount: action((state, payload) => {
    state.count = state.count + 1;
  }),
  decreaseCount: action((state, payload) => {
    state.count = state.count - 1;
  }),
};
