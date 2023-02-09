import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

import { ProjectsContext, ProjectProvider } from "@shared/projects.context";
import "@styles/globals.css";
import { useContext } from "react";

const queryClient = new QueryClient();
queryClient.setDefaultOptions({
  queries: { refetchOnWindowFocus: false, refetchOnMount: true },
});

function MyApp({ Component, pageProps }: AppProps) {
  const projects = useContext(ProjectsContext);

  return (
    <ThemeProvider attribute="class">
      <QueryClientProvider client={queryClient}>
        <ProjectProvider>
          <Component {...pageProps} />
        </ProjectProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default MyApp;
