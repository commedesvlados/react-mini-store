import {applyMiddleware, createStore} from "redux";
import reducer from "./reducers";

const stringMiddleware = () => (next) => (action) => {
  if (typeof action === 'string') {
    return next({
      type: action
    });
  }
  return next(action);
}

const logMiddleware = (store) => (next) => (action) => {
  console.log(action.type, store.getState());
  return next(action);
}

const store = createStore(reducer, applyMiddleware(
  stringMiddleware,
  logMiddleware)
);

export default store;