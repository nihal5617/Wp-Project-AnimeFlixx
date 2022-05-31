import React, { useEffect } from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import { Card } from "../elements/Card";
import { CandlestickChartRounded } from "@mui/icons-material";
import { useHistory } from "react-router-dom"
import * as api from "../../api/index.js";

const sectionHeader = {
  title: "Popular shows",
  paragraph: "",
};

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
    img: require("./../../assets/images/1.jpg"),
    alt: "Image 1",
    name: "Naruto",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
  },
  {
    id: 3,
    delay: 400,
    img: require("./../../assets/images/1.jpg"),
    alt: "Image 1",
    name: "Naruto",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
  },
  {
    id: 4,
    delay: 0,
    img: require("./../../assets/images/1.jpg"),
    alt: "Image 1",
    name: "Naruto",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
  },
  {
    id: 5,
    delay: 200,
    img: require("./../../assets/images/1.jpg"),
    alt: "Image 1",
    name: "Naruto",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
  },
  {
    id: 6,
    delay: 400,
    img: require("./../../assets/images/1.jpg"),
    alt: "Image 1",
    name: "Naruto",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
  },
];
const AllShows = ({
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
  const navigate=useHistory();

  const innerClasses = classNames(
    "features-tiles-inner section-inner pt-0",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames(
    "tiles-wrap center-content",
    pushLeft && "push-left"
  );
  const navigateClicked=(data)=>{
    navigate.push('/anime/'+data);
  }
  const [animeData, setAnimeData] = React.useState([]);
  useEffect(() => {
    async function fetchData() {
      const { data } = await api.getAnime();
      setAnimeData(data);
    }
    fetchData();
  }, [])

  return (
      <div className="">
        <div className={innerClasses}>
          <div className={tilesClasses}>
            {animeData.map((data) => (
              <div onClick={()=>{navigateClicked(data.video)}}>
                <Card
                  img={data.thumbnail}
                  delay={data.delay}
                  alt={data.name}
                  name={data.name}
                  desc={data.desc}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default AllShows;
