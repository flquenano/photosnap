import React from "react";
import SEO from "../components/seo";
import { Layout } from "../components/layout";
import { Hero, Offers } from "../sections/pricing";
import { Compare } from "../components/compare";

const PricingPage = () => {
  return (
    <Layout>
      <SEO title="Pricing" />
      <Hero />
      <Offers />
      <Compare />
    </Layout>
  );
};

export default PricingPage;
