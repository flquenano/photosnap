import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Gallery from "../../components/gallery";

export const GallerySection = () => {
  const {
    homeJson: { gallery }
  } = useStaticQuery(graphql`
    query {
      homeJson {
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
