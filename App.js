import React from "react";
import RootContainer from "./containers/RootContainer";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./redux/reducers";

// ストア
const store = createStore(reducer);

export default function App() {
  return (
    // Provider = storeを使える様にする物
    <Provider store={store}>
      <RootContainer />
    </Provider>
  );
}
