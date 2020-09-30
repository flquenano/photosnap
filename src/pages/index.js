import React from "react";
import SEO from "../components/seo";
import { Layout } from "../components/layout";
import { Hero, HeroTwo, HeroThree, Gallery, Features } from "../sections/home";

const Index = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <HeroTwo />
      <HeroThree />
      <Gallery />
      <Features />
    </Layout>
  );
};

export default Index;
