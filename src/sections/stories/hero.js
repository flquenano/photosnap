import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { StoriesHero as Hero } from "../../components/StoriesHero";

export const StoriesHero = () => {
  const {
    storiesJson: { hero }
  } = useStaticQuery(graphql`
    query {
      storiesJson {
        hero {
          author
          color
          date
          subTitle
          title
          text
          cover {
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
      content={{
        subTitle: hero.subTitle,
        title: hero.title,
        date: hero.date,
        author: hero.author,
        text: hero.text
      }}
      images={{
        desktop: hero.cover.desktop.childImageSharp.fluid,
        tablet: hero.cover.tablet.childImageSharp.fluid,
        mobile: hero.cover.mobile.childImageSharp.fluid
      }}
    />
  );
};
