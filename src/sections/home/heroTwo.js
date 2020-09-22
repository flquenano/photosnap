import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Hero from "../../components/hero";

export const HeroTwo = () => {
  const {
    homeJson: { introTwo }
  } = useStaticQuery(graphql`
    query {
      homeJson {
        introTwo {
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
      image={introTwo.image}
      content={{
        title: introTwo.title,
        text: introTwo.text
      }}
      color={introTwo.color}
      height="600px"
      isBtn={true}
      noGradient={true}
      reverse={true}
    />
  );
};
