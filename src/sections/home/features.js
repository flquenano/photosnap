import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Features } from "../../components/features";

export const FeatureSection = () => {
  const {
    homeJson: { features }
  } = useStaticQuery(graphql`
    query {
      homeJson {
        features {
          title
          text
          icon {
            publicURL
            id
          }
        }
      }
    }
  `);
  return <Features features={features} page="home" />;
};
