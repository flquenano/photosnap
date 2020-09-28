import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Wrapper, CardGroup } from "./offers.css.js";
import { Toggle } from "../../../components/toggle";
import { Card } from "../../../components/card";

export const Offers = () => {
  const [toggle, setToggle] = useState(false);

  const fn = (e) => setToggle(e.target.checked);

  const {
    pricingJson: {
      offers: { basic, business, pro }
    }
  } = useStaticQuery(graphql`
    query {
      pricingJson {
        offers {
          basic {
            price
            text
            title
          }
          business {
            price
            text
            title
          }
          pro {
            price
            title
            text
          }
        }
      }
    }
  `);

  return (
    <Wrapper>
      <br />
      <Toggle setToggle={fn} toggle={toggle} />
      <br />
      <CardGroup>
        <Card
          color="light"
          option={basic.title}
          text={basic.text}
          price={basic.price[toggle ? 1 : 0]}
          subtext={toggle ? "per year" : "per month"}
        />
        <Card
          color="dark"
          option={pro.title}
          text={pro.text}
          price={pro.price[toggle ? 1 : 0]}
          subtext={toggle ? "per year" : "per month"}
        />
        <Card
          color="light"
          option={business.title}
          text={business.text}
          price={business.price[toggle ? 1 : 0]}
          subtext={toggle ? "per year" : "per month"}
        />
      </CardGroup>
    </Wrapper>
  );
};
