"use client"
import { Provider } from "react-redux";
import Landing from "./components/Landing";
import { store } from "./redux/store";
import Login from "./auth/Login";

export default function Home() {
  return (
    <>
      <Provider store={store}>
        <Login />
        <Landing />
      </Provider>
    </>
  );
}
