

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
        src: "",
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
        src: "",
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
        src: "",
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
        src: "",
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
