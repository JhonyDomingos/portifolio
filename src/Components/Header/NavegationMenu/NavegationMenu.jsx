import { useEffect, useState } from "react";
import logoHeader from "../../../Assets/logoHeader.svg";
import { MenuItems } from "./MenuItems/MenuItems";
import navMenu from "./NavMenu.module.scss";
import { BiMenuAltRight } from "react-icons/bi";
import { CgClose } from "react-icons/cg";

export const NavegationMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleResize = () => {
    setIsDesktop(window.innerWidth >= 768);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return (
    <div className={navMenu.container}>
      <div className={navMenu.logoContainer}>
        <img src={logoHeader} alt="Logotipo do Jhonatan Dev" />
      </div>

      {isDesktop ? (
        <div>
          <nav>
            <ul>
              <MenuItems />
            </ul>
          </nav>
        </div>
      ) : (
        <div
          className={`${navMenu.menu__section} ${isOpen ? navMenu.on : ""}`}
          onClick={toggleMenu}
        >
          <div
            className={`${navMenu.menu_toggle} ${isOpen ? "on" : ""}`}
            onClick={toggleMenu}
          >
            {isOpen ? (
              <CgClose color="#FFFFFF" size={25} />
            ) : (
              <BiMenuAltRight color="#FFFFFF" size={30} />
            )}
          </div>
          {isOpen && (
            <nav>
              <ul>
                <MenuItems />
              </ul>
            </nav>
          )}
        </div>
      )}
    </div>
  );
};
