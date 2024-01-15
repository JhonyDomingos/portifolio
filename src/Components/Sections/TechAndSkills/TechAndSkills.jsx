// TechAndSkills.jsx
import React, { useEffect, useState } from "react";
import tech from "./TechAndSkills.module.scss";
export const TechAndSkills = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    setSelectedItem("FrontEnd");
  }, []);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <section>
      <div className={tech.container}>
        <h2 className="section__title">Tecnologias e Habilidades</h2>
        <menu>
          <li
            className={selectedItem === "FrontEnd" ? tech.active : ""}
            onClick={() => handleItemClick("FrontEnd")}
          >
            Front-End
          </li>
          <li
            className={selectedItem === "BackEnd" ? tech.active : ""}
            onClick={() => handleItemClick("BackEnd")}
          >
            Back-End
          </li>
          <li
            className={selectedItem === "SoftSkills" ? tech.active : ""}
            onClick={() => handleItemClick("SoftSkills")}
          >
            Soft Skills
          </li>
        </menu>
        <div></div>
      </div>
    </section>
  );
};
