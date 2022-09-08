import React from "react";
import {
  ScrollContainer,
  ScrollPage,
  Animator,
  batch,
  Fade,
  FadeIn,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  ZoomIn
} from 'react-scroll-motion';
import './style.css';
import headerImage from '../../img/header-image.jpg';
import projectOne from '../../img/project-1-spence.png';
import projectTwo from '../../img/project-2-sunnyside-agency.png';
import projectThree from '../../img/project-3-old-portfolio.png';

const Home = () => {

  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());

  const work = [
    {
      name: "Spence",
      link: "https://github.com/morgan-pernelle/spence",
      imageSrc: projectOne,
    },
    {
      name: "Sunnyside Agency (mobile)",
      link: "https://github.com/morgan-pernelle/sunnyside-agency",
      imageSrc: projectTwo,
    },
    {
      name: "Mon portfolio précédent",
      link: "https://morgan-pernelle.fr/",
      imageSrc: projectThree,
    }
  ];

  return(
    <ScrollContainer>

      {/* section 1 */}


      <ScrollPage page={0}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
          <div className="image-container">
            <img className="header-image" src={headerImage} alt="header polaroid" />
            <div className="black-background"></div>
          </div>
        </Animator>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(1000, 0))}>
          <div className="name">
            <h2 className="first">Morgan</h2>
          </div>
        </Animator>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(-1650, 0))}>
          <div className="name">
            <h2 className="last">Pernelle</h2>
          </div>
        </Animator>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(-100, 100))}>
          <div className="position">
            <div></div>
            <h2 className="occupation">Front-End Developer</h2>
          </div>
        </Animator>
      </ScrollPage>

      {/* section 2 */}

      <ScrollPage page={1}>
        <Animator animation={ZoomInScrollOut}>
          <div className="section-title">
            Portfolio
          </div>
        </Animator>
      </ScrollPage>

      <ScrollPage page={2}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
          <div className="portfolio-content">
            {
              work?.map((work, index) => {
                return (
                  <a href={work?.link} target="_blank" rel="noreferrer" key={work?.name}>
                    <div className="portfolio-card">
                      <div className="project-image">
                        <img src={work?.imageSrc} alt={work?.name} />
                      </div>
                      <div className="portfolio-title">
                        <h3>{work?.name}</h3>
                      </div>
                      <div className="count">
                        {index}
                      </div>
                    </div>
                  </a>
                )
              })
            }
          </div>
        </Animator>
      </ScrollPage>

      {/* section 3 */}

      <ScrollPage page={3}>
        <Animator animation={ZoomInScrollOut}>
          <div className="section-title about-me">
            À propos
          </div>
        </Animator>
      </ScrollPage>

      <ScrollPage page={4}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(-1000, -400))}>
          <div className="background-image-container">
            <img src="" alt="" />
          </div>
        </Animator>
      </ScrollPage>

    </ScrollContainer>
  )
}

export default Home;