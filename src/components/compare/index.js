import React from "react";
import { Wrapper, Header, Features } from "./compare.css.js";
import { useStaticQuery, graphql } from "gatsby";

import { Item } from "./item";

export const Compare = () => {
  const {
    pricingJson: { compare }
  } = useStaticQuery(graphql`
    query {
      pricingJson {
        compare {
          privilege
          title
          features {
            isBasic
            isBusiness
            isPro
            title
          }
        }
      }
    }
  `);

  return (
    <Wrapper>
      <Header>
        <span>The features</span>
        <Features>
          <li>Basic</li>
          <li>Pro</li>
          <li>Business</li>
        </Features>
      </Header>
      {compare.features.map((feature, idx) => (
        <Item feature={feature} key={idx} />
      ))}
    </Wrapper>
  );
};
