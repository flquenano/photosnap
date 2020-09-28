import React from "react";
import styled from "styled-components";

import { Hero, Offers } from "../sections/pricing";

import { Toggle } from "../components/toggle";
import { Card } from "../components/card";
import { Layout } from "../components/layout";
import { Compare } from "../components/compare";

const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
  width: 1440px;
  display: grid;
  place-content: center;
  padding-top: 100px;
`;

const PricingPage = () => {
  return (
    <Layout>
      <Hero />
      <Offers />
      <Compare />
    </Layout>
  );
};

// export const query = graphql`
//   query {
//     allStoriesJson {
//       nodes {
//         preview {
//           desktop {
//             image: childImageSharp {
//               fluid(maxWidth: 360) {
//                 ...GatsbyImageSharpFluid
//               }
//             }
//           }
//           mobile {
//             image: childImageSharp {
//               fluid(maxWidth: 375) {
//                 ...GatsbyImageSharpFluid
//               }
//             }
//           }
//         }
//         id
//         author
//         date
//         title
//       }
//     }
//   }
// `;

export default PricingPage;
