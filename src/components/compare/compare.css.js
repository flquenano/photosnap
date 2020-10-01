import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  margin: 6.4rem 0;
  flex-direction: column;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 16rem 0;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  white-space: nowrap;
  width: 90%;
  max-width: 73.1rem;
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  padding-bottom: 2.3rem;
  border-bottom: 1px solid #000000;
  margin-bottom: 1.6rem;
`;

export const Features = styled.ul`
  visibility: hidden;
  @media ${(props) => props.theme.breakpoints.sm} {
    visibility: visible;
  }
  display: flex;
  & li:last-child {
    margin-right: 3.85rem;
  }
  & li:nth-child(2) {
    margin-right: 8.75rem;
  }
  & li:first-child {
    margin-right: 10.5rem;
  }
`;
