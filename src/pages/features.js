import React from "react";
import SEO from "../components/seo";
import { Layout } from "../components/layout";
import { Hero, Features } from "../sections/features";
import { CTA } from "../components/cta";

const FeaturesPage = () => {
  return (
    <Layout>
      <SEO title="Features" />
      <Hero />
      <Features />
      <CTA />
    </Layout>
  );
};

export default FeaturesPage;
