import React from "react";
import Navbar from "../../components/navbar/Navbar";
import About from "../../components/about/About";
import Counter from "../../components/counter/Counter";
import Work from "../../components/work/Work";
import Speech from "../../components/speech/Speech";
import Team from "../../components/team/Team";
import Teamwork from "../../components/teamwork/Teamwork";
import Images from "../../components/images/Images";
import Footer from "../../components/footer/Footer";
import Copyright from "../../components/copyright/Copyright";

function Home() {
  return (
    <>
      <Navbar />
      <About />
      <Counter />
      <Work />
      <Speech />
      <Team />
      <Teamwork />
      <Images />
      <Footer />
      <Copyright />
    </>
  );
}

export default Home;
