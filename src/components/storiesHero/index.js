import React from "react";

import {
  Wrapper,
  Image,
  Content,
  OverheadHeading,
  MainHeading,
  AuthorHeading,
  Description
} from "./storiesHero.css.js";
import { Button } from "../button";

export const StoriesHero = ({ content, images }) => {
  const sources = [
    {
      ...images.desktop,
      media: "(min-width: 992px)"
    },
    {
      ...images.tablet,
      media: "(min-width: 540px)"
    },
    images.mobile
  ];

  return (
    <Wrapper>
      <Image fluid={sources} />
      <Content>
        <OverheadHeading size="xs" colorScheme="dark">
          {content.subTitle}
        </OverheadHeading>
        <MainHeading size="xl" colorScheme="dark">
          {content.title}
        </MainHeading>

        <AuthorHeading size="xs" colorScheme="dark">
          {content.date} <b>by {content.author}</b>
        </AuthorHeading>

        <Description>{content.text}</Description>
        <Button colorScheme="dark">Read the story</Button>
      </Content>
    </Wrapper>
  );
};
