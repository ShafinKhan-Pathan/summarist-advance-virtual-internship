"use client"
import { Provider } from "react-redux";
import Landing from "./components/Landing";
import { store } from "./redux/store";
import AuthForm from "./auth/AuthForm";

export default function Home() {
  return (
    <>
      <Provider store={store}>
        <AuthForm />
        <Landing />
      </Provider>
    </>
  );
}
