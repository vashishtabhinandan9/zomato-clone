import React, { useState } from "react";
import Slider from "react-slick";

// components
import NutritionCarousalCard from "./NutritionCarousalCard";
import { NextArrow, PrevArrow } from "../CarousalArrow";

const NutritionCarousal = () => {
    /*
    const categories = [
      {
        image:
          "https://dote.zmtcdn.com/prod/data/admin_assets/images/baf809f0523c43d29f51d1e05f9f46be_1629263595.png?output-format=webp",
        title: "Protien & Fitness",
      },
      {
        image:
          "https://dote.zmtcdn.com/prod/data/admin_assets/images/de47fcc91ced4e33b354909e897456e8_1628243615.png?output-format=webp",
        title: "Sleep & stress",
      },
      {
        image:
          "https://dote.zmtcdn.com/prod/data/admin_assets/images/89fdc1246c12461db02d853a513ab616_1628243591.png?output-format=webp",
        title: "Digestion & weight Loss",
      },
      {
        image:
          "https://dote.zmtcdn.com/prod/data/admin_assets/images/473ea322835ea870c0658b883c22dcf6_1626688305.png?output-format=webp",
        title: "Omegas & CoQ10",
      },
      {
        image:
          "https://dote.zmtcdn.com/prod/data/admin_assets/images/76336cff326938873f922d4c1c72066c_1628243556.png?output-format=webp",
        title: "Beauty & Skin Care",
      },
      {
        image:
          "https://dote.zmtcdn.com/prod/data/admin_assets/images/c021611d9bce8289f48f59303b2d0fc6_1628243496.png?output-format=webp",
        title: "Immunity & Bones",
      },
    ];
    */
    const [heroBanners, setHeroBanners] = useState([
        "https://b.zmtcdn.com/web/nutrition/assets/47fb421f35ca12ad3111e3d99d1737571620108828.png",
        "https://b.zmtcdn.com/web/nutrition/assets/0a8f2dad65904b89178905213efe886c1620108711.png",
        "https://b.zmtcdn.com/web/nutrition/assets/f8da550c375c3bec2f6ba341336324561620108741.png",
        "https://b.zmtcdn.com/web/nutrition/assets/cfbb36a56a4203c7efac5de27318ea381620108756.png",
        "https://b.zmtcdn.com/web/nutrition/assets/3872dc3041e9633ba40b51e7dbff263a1620108770.png",
      ]);

    
   
    const settings = {
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,

      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    };
    return (
      <Slider {...settings}>
        {heroBanners.map((image) => (
          <NutritionCarousalCard image={image} />
        ))}
      </Slider>
    )
}

export default NutritionCarousal;