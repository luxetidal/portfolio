"use client";
import { useContext, useEffect, useState } from "react";
import { UIContext } from "../providers/UIProvider";
import EnterScreen from "../components/EnterScreen";
import Loader from "../components/Loader";

export default function Screen() {
  const [started, setStarted] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [initialCheckDone, setInitialCheckDone] = useState(false);
  const { setShowLayout } = useContext(UIContext);

  useEffect(() => {
    const isBot = /bot|crawler|spider|crawling/i.test(navigator.userAgent);
    const isHome = window.location.pathname === "/";
    const alreadyVisited = localStorage.getItem("visited");

    if (isBot) {
      setStarted(true);
    } else if (isHome && !alreadyVisited) {
      setStarted(false);
      setShowLayout(false);
    } else {
      setStarted(true);
    }

    setInitialCheckDone(true);
  }, [setShowLayout]);

  const handleStart = () => {
    localStorage.setItem("visited", "true");
    setShowLoader(true);
    setShowLayout(false);
    setStarted(true);
  };

  if (!initialCheckDone) {
    return null;
  }
  return (
    <>
      {!started ? (
        <EnterScreen onEnter={handleStart} />
      ) : showLoader ? (
        <Loader
          onComplete={() => {
            setShowLoader(false);
            setShowLayout(true);
          }}
        />
      ) : (
        <div>Hello</div>
      )}
    </>
  );
}
