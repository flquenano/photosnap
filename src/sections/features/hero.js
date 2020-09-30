import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Hero } from "../../components/hero";

export const HeroSection = () => {
  const {
    featuresJson: { hero }
  } = useStaticQuery(graphql`
    query {
      featuresJson {
        hero {
          text
          color
          title
          image {
            desktop {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            tablet {
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

  return (
    <Hero
      image={hero.image}
      content={{
        title: hero.title,
        text: hero.text
      }}
      colorScheme={hero.color}
      height="490px"
      isBtn={false}
    />
  );
};
