import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Features } from "../../components/features";

export const FeaturesSection = () => {
  const {
    featuresJson: { features }
  } = useStaticQuery(graphql`
    query {
      featuresJson {
        features {
          text
          title
          icon {
            publicURL
            id
          }
        }
      }
    }
  `);

  return <Features features={features} />;
};
