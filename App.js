import React from "react";
import Main from "./components/MainComponent";
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

//store is passed to all components that's a child as props
export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
