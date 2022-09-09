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
import aboutImage from '../../img/background-2.jpg';
import projectOne from '../../img/project-1-spence.png';
import projectTwo from '../../img/project-2-sunnyside-agency.png';
import projectThree from '../../img/project-3-portfolio.png';
import { FiMail, FiGithub } from 'react-icons/fi';
import { SiTwitter, SiReact } from 'react-icons/si';
import { TiSocialLinkedin } from 'react-icons/ti';

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
      name: "Mon portfolio",
      link: "https://github.com/morgan-pernelle/pf-prlx",
      imageSrc: projectThree,
    }
  ];

  const handleContactClick = (url) => {
    const win = window.open(url, '_blank');
    win.focus();
  }

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
            <img src={aboutImage} alt="illustration background" />
            <div className="black-background"></div>
          </div>
        </Animator>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(1000, 500))}>
          <div className="details">
            <h2 className="greetings">Hello world</h2>
            <p className="bio">
              Anciennement bartender en milieu hôtelier haut de gamme, j'ai arrêté de servir des cocktails pour retourner derrière les écrans et parler aux machines !
            </p>
            <p className="bio">
              En janvier 2022, j'ai débuté une reconversion professionnelle dans le développement web au sein de l'école <a href="https://oclock.io/" target="_blank" rel="noreferrer">O'clock</a> pour une formation intensive de 700h.
            </p>
            <div className="program">
              <u>Au programme :</u>
              <ul className="bio">
                <li>3 mois de socle : HTML 5, CSS 3, PHP & JavaScript.</li>
                <li>1 mois de spécialisation : ReactJS avec Redux et Sass.</li>
                <li>1 mois de projet de fin de formation : <a href="https://tinyurl.com/mr2nafyk" target="_blank" rel="noreferrer" class="c-icon-link">O'lumni</a>, un réseau social sécurisé interne à l'école !</li>
              </ul>
            </div>
            <div className="bio">
            Mon objectif est de devenir un développeur front-end solide et de pouvoir proposer des sites dynamiques offrant une expérience unique à l'utilisateur.
            Mon CV est disponible <a href="http://download856.mediafire.com/5k2tltefrusg/tshc5cqkwk803d4/Morgan+Pernelle+CV.pdf" rel="noreferrer">ici</a> !
            </div>
          </div>
        </Animator>
      </ScrollPage>

      {/* section 4 */}

      <ScrollPage page={5}>
        <Animator animation={ZoomInScrollOut}>
          <div className="section-title contact">
            Contact
          </div>
        </Animator>
      </ScrollPage>

      <ScrollPage page={6}>
          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}>
          <span style={{ fontSize: "40px" }}>

            {/* twitter link */}
            <Animator animation={MoveIn(-1000, 0)}>
              <div 
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={() => handleContactClick("https://twitter.com/MorganDevJs")}
              >
                <SiTwitter color="white" className="contact-list-icon" />
                <p>MorganDevJs</p>
              </div>
            </Animator>

            {/* gmail link */}
            <Animator animation={MoveIn(1000, 0)}>
              <div 
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={() => handleContactClick("mailto:pernelle.morgan@gmail.com")}
              >
                <FiMail color="white" className="contact-list-icon" />
                <p>pernelle.morgan@gmail.com</p>
              </div>
            </Animator>

            {/* github link */}
            <Animator animation={MoveOut(1000, 0)}>
              <div 
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={() => handleContactClick("https://github.com/morgan-pernelle")}
              >
                <FiGithub color="white" className="contact-list-icon" />
                <p>morgan-pernelle</p>
              </div>
            </Animator>

            {/* linkedin link */}
            <Animator animation={MoveOut(-1000, 0)}>
              <div 
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={() => handleContactClick("https://www.linkedin.com/in/morgan-pernelle/")}
              >
                <TiSocialLinkedin color="white" className="contact-list-icon" />
                <p>Morgan Pernelle</p>
              </div>
            </Animator>

          </span>
          </div>
      </ScrollPage>

      {/* section 4 */}

      <ScrollPage page={7}>
        <Animator animation={batch(Fade(), Sticky())}>
          <span className="footer">
            Merci d'avoir visité mon portfolio.
          </span>
          <br />
          <span className="footer tech">
            Coded with <SiReact color="gray" /> React
          </span>
        </Animator>
      </ScrollPage>

    </ScrollContainer>
  )
}

export default Home;