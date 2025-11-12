"use client";
import Landing from "./components/Landing";
import AuthForm from "./auth/AuthForm";
export default function Home() {
  return (
    <>
      <AuthForm />
      <Landing />
    </>
  );
}
