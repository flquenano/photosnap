import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";
import Heading from "../heading";
import Text from "../text";
import { Button, Arrow } from "../button/button.css.js";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  @media ${(props) => props.theme.breakpoints.xs} {
    height: 650px;
  }
`;
const Image = styled(Img)`
  width: 100%;
  height: 100%;
`;
const Content = styled.div`
  background: ${(props) => props.theme.colors.secondary.black};
  width: clamp(310px, 100%, 387px);
  padding: 48px 7%;
  top: 0;
`;

const OverheadHeading = styled(Heading)`
  margin-bottom: 16px; ;
`;
const MainHeading = styled(Heading)`
  width: 80%;
  margin-bottom: 16px;
`;
const AuthorHeading = styled(Heading)`
  margin-bottom: 24px;
`;

const Description = styled(Text)`
  font-size: 15px;
  line-height: 25px;
  color: ${(props) => props.theme.colors.secondary.white};
  opacity: 0.6;
  margin-bottom: 24px;
`;

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

  const sources = [
    {
      ...hero.cover.desktop.childImageSharp.fluid,
      media: "(min-width: 992px)"
    },
    {
      ...hero.cover.tablet.childImageSharp.fluid,
      media: "(min-width: 540px)"
    },
    hero.cover.mobile.childImageSharp.fluid
  ];
  return (
    <Wrapper>
      <Image fluid={sources} />
      <Content>
        <OverheadHeading size="xs" color="dark">
          {hero.subTitle}
        </OverheadHeading>
        <MainHeading size="xl" color="dark">
          {hero.title}
        </MainHeading>

        <AuthorHeading size="xs" color="dark">
          {hero.date} <b>by {hero.author}</b>
        </AuthorHeading>

        <Description>
          The dissected plateau area, while not actually made up of geological
          mountains, is popularly called "mountains," especially in eastern
          Kentucky and West Virginia, and while the ridges are not high, the
          terrain is extremely rugged.
        </Description>
        <Button color="dark">
          Read the story <Arrow className="arrow-svg" color="dark" />
        </Button>
      </Content>
    </Wrapper>
  );
};
