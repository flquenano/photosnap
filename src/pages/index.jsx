import React from "react";
import Layout from "../components/layout.js";
import { Hero, HeroTwo, HeroThree, Gallery, Features } from "../sections/home";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <HeroTwo />
      <HeroThree />
      <Gallery />
      <Features />
    </Layout>
  );
};

export default Index;
