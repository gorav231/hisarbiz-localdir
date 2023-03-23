import React, { useEffect, useState, } from "react";
import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PreLoader from "@/src/loader/PreLoader";

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
    {loader && <PreLoader />}
    <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
     </QueryClientProvider>
  </>
  )
}
