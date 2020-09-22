import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Wrapper, Header, BodyGradient, Image, Content } from "./cta.css.js";
import Button from "../button";

export const CTA = () => {
  const { mobile, tablet, desktop } = useStaticQuery(graphql`
    query MyQuery {
      mobile: file(relativePath: { regex: "/bg-beta-1x/" }) {
        ...FileFragment
      }
      tablet: file(relativePath: { regex: "/bg-beta-2x/" }) {
        ...FileFragment
      }
      desktop: file(relativePath: { regex: "/bg-beta-3x/" }) {
        ...FileFragment
      }
    }

    fragment FileFragment on File {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  `);

  const sources = [
    {
      ...desktop.childImageSharp.fluid,
      media: "(min-width: 992px)"
    },
    {
      ...tablet.childImageSharp.fluid,
      media: "(min-width: 540px)"
    },
    mobile.childImageSharp.fluid
  ];

  console.log(mobile);
  return (
    <Wrapper>
      <Image fluid={sources} />
      <BodyGradient>
        <Content>
          <Header size="xl" color="dark">
            We’re in beta. Get your invite today!
          </Header>
          <Button color="dark" />
        </Content>
      </BodyGradient>
    </Wrapper>
  );
};
