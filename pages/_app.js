import React, { useEffect, useState, } from "react";
import "@/styles/globals.css";
import Script from "next/script";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PreLoader from "@/src/loader/PreLoader";
import DataContext from "@/src/Context/DataContext";
import UserContext from "@/src/Context/UserContext";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, [loader]);
  return(
    <>
    <Script
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDzLxooRzXh1axdLrfQLUFHHQ98gQz3zS0&libraries=places"
        strategy="beforeInteractive"
      />
    {loader && <PreLoader />}
    <QueryClientProvider client={queryClient}>
      <DataContext>
        <UserContext>
         <Component {...pageProps} />
        </UserContext>
      </DataContext>
    </QueryClientProvider>
  </>
  )
}
