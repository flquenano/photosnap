import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Hero } from "../../components/hero";

export const HeroMain = () => {
  const {
    homeJson: { introMain }
  } = useStaticQuery(
    graphql`
      query {
        homeJson {
          introMain {
            text
            color
            title
            image {
              desktop {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              tablet {
                childImageSharp {
                  fluid(maxWidth: 273) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              mobile {
                childImageSharp {
                  fluid(maxWidth: 375) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    `
  );

  return (
    <Hero
      image={introMain.image}
      content={{
        title: introMain.title,
        text: introMain.text
      }}
      colorScheme={introMain.color}
      height="650px"
      isBtn={true}
      Btn="GET AN INVITE"
    />
  );
};
