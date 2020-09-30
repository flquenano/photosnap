import React from "react";
import { Layout } from "../components/layout";
import SEO from "../components/seo";
import { Gallery, Hero } from "../sections/stories";

const StoriesPage = () => {
  return (
    <Layout>
      <SEO title="Stories" />
      <Hero />
      <Gallery />
    </Layout>
  );
};

export default StoriesPage;
