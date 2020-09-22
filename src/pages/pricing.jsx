import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
  width: 1440px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
`;

const PricingPage = () => {
  return <Wrapper></Wrapper>;
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
