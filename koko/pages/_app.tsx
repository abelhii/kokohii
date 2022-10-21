import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

import ThemeChanger from "../components/ThemeChanger";
import "../styles/globals.css";

const queryClient = new QueryClient();
queryClient.setDefaultOptions({
  queries: { refetchOnWindowFocus: false, refetchOnMount: true },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />

        <div className="fixed bottom-0 right-4 p-10">
          <ThemeChanger />
        </div>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default MyApp;
