import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import { Card } from "../elements/Card";

const cardData = [
  {
    id: 1,
    delay: 0,
    img: require("./../../assets/images/1.jpg"),
    alt: "Image 1",
    name: "Naruto",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
  },
  {
    id: 2,
    delay: 200,
    img: require("./../../assets/images/2.jpg"),
    alt: "Image 2",
    name: "Baki",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
  },
  {
    id: 3,
    delay: 400,
    img: require("./../../assets/images/3.jpg"),
    alt: "Image 3",
    name: "Death Note",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
  },
  {
    id: 4,
    delay: 0,
    img: require("./../../assets/images/4.jpg"),
    alt: "Image 4",
    name: "Attack of Titan",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
  },
  {
    id: 5,
    delay: 200,
    img: require("./../../assets/images/5.jpg"),
    alt: "Image 5",
    name: "Haikyu",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
  },
  {
    id: 6,
    delay: 400,
    img: require("./../../assets/images/6.jpg"),
    alt: "Image 6",
    name: "Dragon Ball Z",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
  },
];

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const outerClasses = classNames(
    "features-tiles section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-tiles-inner section-inner pt-0",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames(
    "tiles-wrap center-content",
    pushLeft && "push-left"
  );

  const sectionHeader = {
    title: "Unlimited animes at a click",
    paragraph:
      "Animeflixx is the home of amazing original animes that you can't find anywhere else. Watch animes which are all tailored specifically to you.",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            {cardData.map((data) => (
              <>
                <Card
                  img={data.img}
                  delay={data.delay}
                  alt={data.alt}
                  name={data.name}
                  desc={data.desc}
                />
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
