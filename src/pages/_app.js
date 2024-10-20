import "@/styles/globals.css";
import UserLayout from "@/components/Layout/UserLayout";
import Loader from "@/utils/Loader";
import Router from 'next/router'
import { NextUIProvider } from "@nextui-org/react";
import { useEffect, useState } from "react";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const handleStart = (url) => { window.scrollTo(0, 0); setLoading(true) };
    const handleComplete = (url) => setLoading(false);

    Router.events.on('routeChangeStart', handleStart)
    Router.events.on('routeChangeComplete', handleComplete)
    Router.events.on('routeChangeError', handleComplete)

    return () => {
      Router.events.off('routeChangeStart', handleStart)
      Router.events.off('routeChangeComplete', handleComplete)
      Router.events.off('routeChangeError', handleComplete)
    }
  })
  return (
    <NextUIProvider>
      <Head>
        <link rel="shortcut icon" href="/images/logo-only.svg" type="image/png" />
        <link rel="favicon" href="/images/logo-only.svg" type="image/png" />
        <link rel="icon" href="/images/logo-only.svg" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap" rel="stylesheet" />
      </Head>
      <UserLayout>
        {
          loading
            ?
            <Loader />
            :
            <Component {...pageProps} />
        }
      </UserLayout>
    </NextUIProvider>
  );
}
