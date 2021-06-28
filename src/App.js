import { createStore } from "redux";

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "ZERO":
      return 0;
    default:
      // if none of the above matches, code comes here
      return state;
  }
};

const store = createStore(counterReducer);
console.log(store.getState());
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
console.log(store.getState());
store.dispatch({ type: "ZERO" });
store.dispatch({ type: "DECREMENT" });
console.log(store.getState());

function App() {
  return <div></div>;
}

export default App;
