import { Techs } from "./techs";

export const TechList = ({ technologies }) => {
  return (
    <div>
      <Techs>
        {technologies.map((tech) => (
          <li key={tech.name}>
            <abbr title={tech.title}>{tech.name}</abbr>
            {tech.icon}
          </li>
        ))}
      </Techs>
    </div>
  );
};
