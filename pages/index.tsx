import type { NextPage } from "next";
import Head from "next/head";
import { Card } from "../components/";

// import components
import { Navbar, Footer, Hero, Services } from "../containers";

const Home: NextPage = () => {
  return (
    <div
      className="bg-bg2 bg-opacity-5 px-6  py-9 font-nunito
    "
    >
      <Head>
        <title>Vioni</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <Services />
      <Footer />
    </div>
  );
};

export default Home;
