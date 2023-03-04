import "../styles/globals.css";
import { useEffect, useState } from "react";
import CUButton from "../components/contactUsButton";
import Footer from "../components/footer";
import { useRouter } from "next/router";
import { analytics, auth } from "../lib/firebase";

function MyApp({ Component, pageProps }) {
  const routers = useRouter();

  useEffect(() => {
    const logEvent = url => {
      analytics().setCurrentScreen(url);
      analytics().logEvent("screen_view");
    };

    routers.events.on("routeChangeComplete", logEvent);
    //For First Page
    logEvent(window.location.pathname);

    //Remvove Event Listener after un-mount
    return () => {
      routers.events.off("routeChangeComplete", logEvent);
    };
  }, []);

  return (
    <>
      <Component {...pageProps} />
      <CUButton />
      <Footer />
    </>
  );
}

export default MyApp;
