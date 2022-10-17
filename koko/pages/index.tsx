import type { NextPage } from "next";
import Head from "next/head";
import About from "../sections/About";
import Header from "../sections/Header";
import ThemeChanger from "../components/ThemeChanger";
import { theme } from "../shared/utils";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative overflow-y-scroll snap-mandatory snap-y h-screen [&>*]:p-10 [&>section]:snap-start">
        <Header />
        <About />
        <h1 className="text-3xl font-bold underline">Hello world!</h1>

        <div className="fixed bottom-0 right-0">
          <ThemeChanger />
        </div>
      </main>
    </div>
  );
};

export default Home;
