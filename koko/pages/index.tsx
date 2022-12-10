import type { NextPage } from "next";
import Head from "next/head";

import FixedTools from "@components/FixedTools";
import About from "@sections/About";
import Header from "@sections/Header";
import SelectedProjects from "@sections/SelectedProjects";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Wardah</title>
        <meta name="description" content="UI/UX design portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative h-screen [&>section]:p-10">
        <FixedTools />
        <Header />
        <About />
        <SelectedProjects />
      </main>
    </div>
  );
};

export default Home;
