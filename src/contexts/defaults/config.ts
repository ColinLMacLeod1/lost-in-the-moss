import jungleWaterfall from "../../resources/images/jungleWaterfall.jpg";
import icyMountain from "../../resources/images/icyMountain.jpg";
import hermitMeadows from "../../resources/images/hermitMeadows.jpg";
import STBeach from "../../resources/images/STBeach.jpg";
import STSunset from "../../resources/images/STSunset.jpg";

interface section {
  title: string;
  mainImg: img;
  images: img[];
}

export interface config {
  title: string;
  sections: section[];
}

export const defaultConfig = {
  title: "LOST IN THE MOSS",
  sections: [
    {
      title: "ADVENTURE",
      mainImg: {
        src: jungleWaterfall,
        alt: "",
      },
      images: [
        {
          src: "",
          alt: "",
        },
        {
          src: "",
          alt: "",
        },
        {
          src: "",
          alt: "",
        },
      ],
    },
    {
      title: "SPORT",
      mainImg: {
        src: icyMountain,
        alt: "",
      },
      images: [
        {
          src: "",
          alt: "",
        },
        {
          src: "",
          alt: "",
        },
        {
          src: "",
          alt: "",
        },
      ],
    },
    {
      title: "BRAND",
      mainImg: {
        src: hermitMeadows,
        alt: "",
      },
      images: [
        {
          src: "",
          alt: "",
        },
        {
          src: "",
          alt: "",
        },
        {
          src: "",
          alt: "",
        },
      ],
    },
    {
      title: "DRONE",
      mainImg: {
        src: STBeach,
        alt: "",
      },
      images: [
        {
          src: "",
          alt: "",
        },
        {
          src: "",
          alt: "",
        },
        {
          src: "",
          alt: "",
        },
      ],
    },
  ],
};
