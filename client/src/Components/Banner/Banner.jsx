import React from "react";

// Components
import Slider1 from "../Sliders/Slider1.jsx";
import Slider2 from "../Sliders/Slider2.jsx";

const Banner = () => {
  let images = [
    "https://img.freepik.com/free-vector/gradient-dynamic-blue-lines-background_23-2148995756.jpg",

    "https://thumbs.dreamstime.com/b/incredibly-beautiful-sunset-sun-lake-sunrise-landscape-panorama-nature-sky-amazing-colorful-clouds-fantasy-design-115177001.jpg",

    "https://www.shutterstock.com/image-photo/mesmerizing-3d-abstract-multicolor-visualization-600nw-2308145127.jpg",

    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXlNy2OEWtRVTLY9pkUp6af4zcmFev8B_yeA&s",

    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXlNy2OEWtRVTLY9pkUp6af4zcmFev8B_yeA&s",

    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXlNy2OEWtRVTLY9pkUp6af4zcmFev8B_yeA&s",
  ];

  return (
    <>
      <div className="relative">
        <Slider1 images={images} className="w-screen h-80" />
        <Slider2
          images={images}
          loop={true}
          className="w-32 h-44 md:w-40 md:h-60 absolute top-56 left-10 md:left-14"
        />
      </div>
    </>
  );
};

export default Banner;
