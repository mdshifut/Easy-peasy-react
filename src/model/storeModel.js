import { createStore } from "easy-peasy";
import counterModel from "./counterModel";

export default createStore({ count: counterModel });
