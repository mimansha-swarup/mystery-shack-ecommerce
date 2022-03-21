import { HeroImage } from "../../../assets/index";

import "./Hero.css";

import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import { useState } from "react";

const Hero = () => {
  const [currHeroImage, setCurrHeroImage] = useState(0);

  const handleForwardClick = () =>
    setCurrHeroImage((prevHeroImg) =>
      prevHeroImg + 1 < HeroImage.length ? prevHeroImg + 1 : 0
    );

  const handleBackwardClick = () =>
    setCurrHeroImage((prevHeroImg) =>
      prevHeroImg - 1 >= 0 ? prevHeroImg - 1 : HeroImage.length - 1
    );

  return (
    <div className="hero mt-3 mb-3">
      <BsFillArrowLeftCircleFill
        onClick={handleBackwardClick}
        className=" hero-navigate absolute-middle"
      />
      <BsFillArrowRightCircleFill
        onClick={handleForwardClick}
        className="hero-navigate absolute-middle"
      />

      <img
        className="img-responsive"
        src={HeroImage[currHeroImage]}
        alt="HeroImage"
      />
    </div>
  );
};

export default Hero;
