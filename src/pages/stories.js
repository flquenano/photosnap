import React from "react";
import { Layout } from "../components/layout";
import { StoriesHero } from "../components/storiesHero";

import { Gallery } from "../sections/stories";

const StoriesPage = () => {
  return (
    <Layout>
      <StoriesHero />
      <Gallery />
    </Layout>
  );
};

export default StoriesPage;
