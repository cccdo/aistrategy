import React from "react";
import { HomepageBanner, HomepageCallout } from "gatsby-theme-carbon";
import HomepageTemplate from "gatsby-theme-carbon/src/templates/Homepage";
import { calloutLink } from "./Homepage.module.scss";

import Carbon from "./carbon.jpg";

const FirstLeftText = () => <p>Mission</p>;

const FirstRightText = () => (
  <p>
    Our mission is to make Watson the leader in trusted AI for business by
    delivering value to customers via the integration of the most innovative AI
    capabilities surfaced from across IBM into products and services that enable
    organizations to build trustworthy AI at scale
  </p>
);

const SecondLeftText = () => <p>Callout component</p>;

const SecondRightText = () => (
  <p>
    You can also not use these components at all by not providing the callout
    props to the template or writing your own template.
    <a
      className={calloutLink}
      href="https://github.com/carbon-design-system/gatsby-theme-carbon/blob/main/packages/example/src/gatsby-theme-carbon/templates/Homepage.js"
    >
      Homepage source →
    </a>
  </p>
);

const BannerText = () => <h1>AI Strategy</h1>;

const customProps = {
  Banner: <HomepageBanner renderText={BannerText} image={Carbon} />,
  FirstCallout: (
    <HomepageCallout
      backgroundColor="#030303"
      color="white"
      leftText={FirstLeftText}
      rightText={FirstRightText}
    />
  ),
  SecondCallout: (
    <HomepageCallout
      leftText={SecondLeftText}
      rightText={SecondRightText}
      color="white"
      backgroundColor="#061f80"
    />
  ),
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
