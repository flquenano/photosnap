import React from "react";
import Layout from "../components/layout.js";
import { Hero, Features } from "../sections/features";
import { CTA } from "../components/cta";

const FeaturesPage = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <CTA />
    </Layout>
  );
};

export default FeaturesPage;
