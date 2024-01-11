import about from "./About.module.scss";

import myPhoto from "../../../Assets/aboutimg.png";

export const AboutSection = () => {
  return (
    <main>
      <section>
        <div className={about.container}>
          <figure className={about.picture__box}>
            <img src={myPhoto} alt="Your Name" />
          </figure>
          <article className={about.info}>
            <h2 className="section__title">sobre mim</h2>
            <h3 className="section__sub__title">João Pessoa - PB, Brasil</h3>
            <p className="description__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              id egestas dui. Nullam finibus aliquam enim quis faucibus. Aenean
              ac commodo dolor, nec bibendum velit.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
};
