import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { Gallery } from "../../components/gallery";

const GallerySection = () => {
  const {
    storiesJson: { gallery }
  } = useStaticQuery(graphql`
    query {
      storiesJson {
        gallery {
          author
          title
          date
          preview {
            desktop {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            mobile {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `);

  return <Gallery images={gallery} />;
};

export { GallerySection };
