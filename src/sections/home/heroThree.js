import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Hero } from "../../components/hero";

export const HeroThree = () => {
  const {
    homeJson: { introThree }
  } = useStaticQuery(graphql`
    query {
      homeJson {
        introThree {
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
      image={introThree.image}
      content={{
        title: introThree.title,
        text: introThree.text
      }}
      color={introThree.color}
      height="600px"
      isBtn={true}
      noGradient={true}
      Btn="VIEW THE STORIES"
    />
  );
};
