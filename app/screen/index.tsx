"use client";
import { useEffect, useState } from "react";
import EnterScreen from "../components/EnterScreen";


export default function Screen() {
  const [started, setStarted] = useState(false);
  const [initialCheckDone, setInitialCheckDone] = useState(false);

  useEffect(() => {
    const isBot = /bot|crawler|spider|crawling/i.test(navigator.userAgent);
    const isHome = window.location.pathname === "/";
    const alreadyVisited = localStorage.getItem("visited");

    if (isBot) {
      setStarted(true);
    } else if (isHome && !alreadyVisited) {
      setStarted(false);
    } else {
      setStarted(true);
    }

    setInitialCheckDone(true);
  }, []);

  const handleStart = () => {
    sessionStorage.setItem("visited", "true");
    setStarted(true);
  };

  if (!initialCheckDone) {
    return null;
  }
  return (
    <>{!started ? <EnterScreen onEnter={handleStart} /> : <div>Hello</div>}</>
  );
}
