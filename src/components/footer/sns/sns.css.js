import styled from "styled-components";
import FBd from "./facebook.svg";
import YTd from "./youtube.svg";
import TWd from "./twitter.svg";
import PTd from "./pinterest.svg";
import IGd from "./instagram.svg";

export const Wrapper = styled.div`
  width: 17rem;
  display: grid;
  grid-gap: 1.4rem;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(5, 1fr);
  place-content: center;
`;

export const FB = styled(FBd)`
  &:hover {
    path {
      cursor: pointer;
      fill: url(#fb);
    }
  }
`;

export const YT = styled(YTd)`
  &:hover {
    path {
      cursor: pointer;
      fill: url(#yt);
    }
  }
`;

export const TW = styled(TWd)`
  &:hover {
    path {
      cursor: pointer;
      fill: url(#tw);
    }
  }
`;

export const PT = styled(PTd)`
  &:hover {
    path {
      cursor: pointer;
      fill: url(#pt);
    }
  }
`;

export const IG = styled(IGd)`
  &:hover {
    path {
      cursor: pointer;
      fill: url(#ig);
    }
  }
`;
