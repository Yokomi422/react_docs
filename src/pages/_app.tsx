import { AppProps } from "next/app";
import React from "react";
import Head from "next/head";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="bg-sky-100  min-h-screen w-full">
        <Head>
          <title>Next.js + TypeScript + Tailwind CSS practice</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
