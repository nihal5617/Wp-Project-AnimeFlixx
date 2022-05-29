import React from "react";
import AllShows from "../components/sections/AllShows";
import Banner from "../components/sections/Banner/Banner";
import Modal from "../components/elements/Modal"

const Main = () => {
  return (
    <div>
      <Banner />
      <AllShows />
      {/* <Modal show="true" video="https://www.youtube.com/embed/E7wJTI-1dvQ" videoTag="iframe" children="A show" closeHidden="false"/> */}
    </div>
  );
};

export default Main;
