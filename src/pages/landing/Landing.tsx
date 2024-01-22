import { useState } from "react";
import { useConfig } from "../../contexts/Config";
import Section from "./section/Section";

import "./Landing.css"
import logo from "../../resources/images/logo.svg";

function Landing() {
  const config = useConfig();
  const [selectedSection, setSelectedSection] = useState(config.sections[0].title)

  console.log("config: ", config)
  return (
    <div className="Landing">
      <header className="Landing-header">
        <div className="Landing-title-box">
          {config.title}
        </div>
      </header>
      <div className="Landing-page">
        {
          config.sections.map((section) => {
            const isSelected = section.title === selectedSection;
            console.log("isSelected: ",isSelected)
            return <Section key={section.title} isSelected={isSelected} {...section}></Section>
          })
        }

      </div>
    </div>
  );
}

export default Landing;
