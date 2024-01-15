import { Header } from "../../Components/Header/Header";
import { AboutSection } from "../../Components/Sections/AboutSection/AboutSection";
import { HeroSection } from "../../Components/Sections/HeroSection/HeroSection";
import { TechAndSkills } from "../../Components/Sections/TechAndSkills/TechAndSkills";

export const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <TechAndSkills />
    </>
  );
};
