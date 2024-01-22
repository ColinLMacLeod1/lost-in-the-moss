import "./Section.css";

interface SectionProps {
  title: string;
  mainImg: img;
  images: img[];
  isSelected: boolean;
}

function Section({ title, mainImg, images, isSelected }: SectionProps) {
  return (
    <div
      className={`Section ${isSelected ? "Section-selected" : "Section-unselected"}`}
      style={{ backgroundImage: mainImg.src }}
    >
      {title}
    </div>
  );
}

export default Section;
