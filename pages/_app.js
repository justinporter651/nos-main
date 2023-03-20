import '../styles/globals.css';
import {useEffect, useState} from 'react';
import CUButton from '../components/contactUsButton';
import Footer from '../components/footer';
import {useRouter} from 'next/router';
import {analytics} from '../lib/firebase';
import {useClients, useUserData} from '../lib/hooks';
import {UserContext, ClientsContext} from '../lib/context';

function MyApp({Component, pageProps}) {
  const routers = useRouter();
  const userData = useUserData();
  const clientsData = useClients();

  useEffect(() => {
    const logEvent = url => {
      analytics().setCurrentScreen(url);
      analytics().logEvent('screen_view');
    };

    routers.events.on('routeChangeComplete', logEvent);
    //For First Page
    logEvent(window.location.pathname);
    console.log(window.location.pathname);

    //Remvove Event Listener after un-mount
    return () => {
      routers.events.off('routeChangeComplete', logEvent);
    };
  }, []);

  return (
    <ClientsContext.Provider value={clientsData}>
      <UserContext.Provider value={userData}>
        <Component {...pageProps} />
        <CUButton />
        <Footer />
      </UserContext.Provider>
    </ClientsContext.Provider>
  );
}

export default MyApp;
