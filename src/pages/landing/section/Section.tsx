import "./Section.css";

interface SectionProps {
  title: string;
  mainImg: img;
  images: img[];
  isSelected: boolean;
  zIndex: number;
}

function Section({ title, mainImg, images, isSelected, zIndex }: SectionProps) {
  return (
    <div
      className={`Section ${isSelected ? "Section-selected" : "Section-unselected"}`}
      style={{ backgroundImage: `url(${mainImg.src})`, zIndex }}
    >
      {title}
    </div>
  );
}

export default Section;
