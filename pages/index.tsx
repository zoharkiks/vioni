import type { NextPage } from "next";
import Head from "next/head";
import { Card } from "../components/";

// import components
import { Navbar, Footer, Hero } from "../containers";

const Home: NextPage = () => {
  return (
    <div
      className="px-6 py-9 font-nunito  bg-bg2 bg-opacity-5
    "
    >
      <Head>
        <title>Vioni</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

<div className="">

<Navbar />
      <Hero />
</div>
     

      {/* Website Sections */}

      <Footer />
    </div>
  );
};

export default Home;
