import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";
import { Heading } from "../heading";
import { Text } from "../text";
import { Button } from "../button";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  @media ${(props) => props.theme.breakpoints.xs} {
    height: 650px;
    display: flex;
    align-items: center;
  }
`;
const Image = styled(Img)`
  width: 100%;
  height: 100%;
`;
const Content = styled.div`
  background: ${(props) => props.theme.colors.secondary.black};
  width: 100%;
  padding: 48px 7%;
  top: 0;
  @media ${(props) => props.theme.breakpoints.xs} {
    width: 38.7rem;
    padding: 0;
    margin: 14rem 0 14rem 5%;
    position: absolute;
    background: none;
  }
`;

const OverheadHeading = styled(Heading)`
  margin-bottom: 1.6rem; ;
`;
const MainHeading = styled(Heading)`
  width: 80%;
  margin-bottom: 1.6rem;
`;
const AuthorHeading = styled(Heading)`
  margin-bottom: 2.4rem;
`;

const Description = styled(Text)`
  font-size: 1.5rem;
  line-height: 2.5rem;
  color: ${(props) => props.theme.colors.secondary.white};
  opacity: 0.6;
  margin-bottom: 2.4rem;
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

        <Description>{hero.text}</Description>
        <Button color="dark">Read the story</Button>
      </Content>
    </Wrapper>
  );
};
