import hero from "./heroSection.module.scss";
import { SlSocialLinkedin } from "react-icons/sl";
import { LuGithub } from "react-icons/lu";
export const HeroSection = () => {
  return (
    <section>
      <div className={hero.containter}>
        <div className={hero.text__box}>
          <span className="section__title">Olá, eu sou,</span>
          <h1 className="title">Jhonatan domingos</h1>
          <p className="section__title">desenvolvedor front-end </p>
        </div>
        <div className={hero.button_container}>
          <a href="#">
            <SlSocialLinkedin className={hero.icon} />
            <span>LinkedIn</span>
          </a>
          <a href="#">
            <LuGithub className={hero.icon} />
            <span>Github</span>
          </a>
        </div>
      </div>
    </section>
  );
};
