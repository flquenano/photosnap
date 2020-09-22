import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import HeadingComponent from "../../heading";
import Text from "../../text";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: clamp(310px, 90%, 457px);
  text-align: center;
  margin-bottom: 56px;
  @media ${(props) => props.theme.breakpoints.md} {
    width: 350px;
    margin-bottom: 104px;
  }
`;

const Icon = styled.img`
  margin-bottom: 48px;
`;
const Heading = styled(HeadingComponent)`
  margin-bottom: 16px;
`;

export const Feature = ({ icon, title, text }) => {
  return (
    <Wrapper>
      <Icon src={icon} />
      <Heading size="sm">{title}</Heading>
      <Text>{text}</Text>
    </Wrapper>
  );
};

Feature.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};
