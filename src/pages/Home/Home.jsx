import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import styles from "./Home.module.css";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import MyExperience from "../Component/MyExperience/MyExperience";
import NavbarBS from "../Component/Navbar/NavbarBS/NavbarBS";
import Footer from "../Component/Footer/Footer";
import Pitect from "../Project/Pitect/Pitect";
import Uplink from "../Project/Uplink/Uplink";
//image
import HeadingImage from "../../assets/images/heading-img.png";
import AboutImage from "../../assets/images/about-image.png";
import html from "../../assets/images/image14.png";
import css from "../../assets/images/image15.png";
import sass from "../../assets/images/image16.png";
import js from "../../assets/images/image17.png";
import ts from "../../assets/images/image18.png";
import node from "../../assets/images/image22.png";
import react from "../../assets/images/image21.png";
import vue from "../../assets/images/image20.png";
import git from "../../assets/images/image25.png";
import github from "../../assets/images/image26.png";
import vscode from "../../assets/images/image24.png";
import figma from "../../assets/images/image23.png";
import scrum from "../../assets/images/scrum.png";
import inhotel from "../../assets/images/inhotel.png";
import pitect from "../../assets/images/pitect.png";
import uplink from "../../assets/images/uplink.png";
import mtiadmin from "../../assets/images/mtiadmin.png";
import evote from "../../assets/images/evote.png";
import mtimitra from "../../assets/images/mtimitra.png";
import hyponic from "../../assets/images/hyponic.png";
import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import Inhotel from "../Project/Inhotel/Inhotel";
import MTI from "../Project/MTI/MTI";
import Evote from "../Project/Evote/Evote";
import MTIMitra from "../Project/MTIMitra/MTIMitra";
import Hyponic from "../Project/Hyponic/Hyponic";

function Home() {
  const [size, setSize] = React.useState("full");
  const [openInhotel, setOpenInhotel] = React.useState(false);
  const [openPitect, setOpenPitect] = React.useState(false);
  const [openUplink, setOpenUplink] = React.useState(false);
  const [openMti, setOpenMti] = React.useState(false);
  const [openEvote, setOpenEvote] = React.useState(false);
  const [openMtiMitra, setOpenMtiMitra] = React.useState(false);
  const [openHyponic, setOpenHyponic] = React.useState(false);
  const [placement, setPlacement] = React.useState();
  let width = window.screen.width;
  console.log(width);

  const handleOpenInhotel = (key) => {
    setOpenInhotel(true);
    setPlacement(key);
  };
  const handleOpenPitect = (key) => {
    setOpenPitect(true);
    setPlacement(key);
  };

  const handleOpenUplink = (key) => {
    setOpenUplink(true);
    setPlacement(key);
  };

  const handleOpenMti = (key) => {
    setOpenMti(true);
    setPlacement(key);
  };

  const handleOpenEvote = (key) => {
    setOpenEvote(true);
    setPlacement(key);
  };

  const handleOpenMtiMitra = (key) => {
    setOpenMtiMitra(true);
    setPlacement(key);
  };

  const handleOpenHyponic = (key) => {
    setOpenHyponic(true);
    setPlacement(key);
  };
  return (
    <div className={styles.home}>
      <NavbarBS />
      {/* heading */}
      <Container className={styles.heading}>
        <Fade left>
          <div className={styles.headingLeft}>
            <div className={styles.headingText}>
              <h3 className={styles.name}>Hello, Maskurnia Shidi</h3>
              <h4 className={styles.title}>Frontend Developer</h4>
              <div className={styles.dividerSmall}></div>
              <p className={styles.headingDescription}>Hi! I’am a Frontend Developer - Creating a powerfull and beatiful website page</p>
              <div className={styles.btnHeading}>
                <a href="https://wa.me/6287861130080" className={styles.btnChat}>
                  Let's talk
                </a>
                <a href="#portofolio" className={styles.btnPorto}>
                  Portofolio
                </a>
              </div>
            </div>
            <div className={styles.headingSosmed}>
              <p className={styles.sosmedText}>Checkout My</p>
              <a href="https://wa.me/6287861130080" className={styles.sosmedBox}>
                <IoLogoWhatsapp className={styles.sosmedItem} />
              </a>
              <a href="https://www.instagram.com/maskurniash/" className={styles.sosmedBox}>
                <AiFillInstagram className={styles.sosmedItem} />
              </a>
              <a href="https://github.com/maskurniashidi" className={styles.sosmedBox}>
                <AiFillGithub className={styles.sosmedItem} />
              </a>
              <a href="https://www.linkedin.com/in/maskurniashidi/" className={styles.sosmedBox}>
                <AiFillLinkedin className={styles.sosmedItem} />
              </a>
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className={styles.headingRight}>
            <img src={HeadingImage} alt="heading image" className={styles.headingImage} />
          </div>
        </Fade>
      </Container>

      {/* about */}
      <Container id="#about" className={styles.about}>
        <div className={styles.aboutContainer}>
          <h3 className={styles.aboutTitle}>ABOUT ME</h3>
          <div className={styles.aboutContent}>
            <div className={styles.aboutLeft}>
              <img src={AboutImage} alt="" className={styles.aboutImage} />
            </div>
            <div className={styles.aboutRight}>
              <div className={styles.aboutme}>
                <h4 className={styles.aboutName}>Maskurnia Shidi</h4>
                <h5 className={styles.aboutTitleName}>Frontend Developer</h5>
                <p className={styles.aboutDetail}>
                  Student of Informatics Engineering, State Electronics Polytechnic of Surabaya. Have a great interest in web display development. Have good verbal and verbal communication skills, able to work in a team, and high
                  willingness to continue learning.
                </p>
              </div>
              <div className={styles.education}>
                <h5 className={styles.aboutEducationTitle}>Education</h5>
                <p className={styles.educationPlace}>Electronic Engineering Polytechnic Institute of Surabaya</p>
                <p className={styles.educationMajor}>Informatics Engineering</p>
              </div>
              <a href="https://drive.google.com/drive/folders/1u8IEOteSp-ZkBHwthJGx33Y2gTAV4QAs?usp=sharing" className={styles.downloadCV}>
                Download CV
              </a>
            </div>
          </div>
        </div>
      </Container>

      {/* Experience */}
      <Flip left>
        <MyExperience className="myExp" />
      </Flip>

      {/* myskill */}
      <Container className={styles.skillSection}>
        <div className={styles.skillContainer}>
          <h5 className={styles.skillTitle}>My Skill</h5>
          <div className={styles.skillSet}>
            <div className={styles.skillItemBox}>
              <img src={html} alt="html" className={styles.skillItem} />
            </div>
            <div className={styles.skillItemBox}>
              <img src={css} alt="css" className={styles.skillItem} />
            </div>
            <div className={styles.skillItemBox}>
              <img src={sass} alt="sass" className={styles.skillItem} />
            </div>
            <div className={styles.skillItemBox}>
              <img src={js} alt="js" className={styles.skillItem} />
            </div>
            <div className={styles.skillItemBox}>
              <img src={ts} alt="ts" className={styles.skillItem} />
            </div>
            <div className={styles.skillItemBox}>
              <img src={node} alt="node" className={styles.skillItem} />
            </div>
            <div className={styles.skillItemBox}>
              <img src={react} alt="react" className={styles.skillItem} />
            </div>
            <div className={styles.skillItemBox}>
              <img src={vue} alt="vue" className={styles.skillItem} />
            </div>
            <div className={styles.skillItemBox}>
              <img src={git} alt="git" className={styles.skillItem} />
            </div>
            <div className={styles.skillItemBox}>
              <img src={github} alt="github" className={styles.skillItem} />
            </div>
            <div className={styles.skillItemBox}>
              <img src={vscode} alt="gvscode" className={styles.skillItem} />
            </div>
            <div className={styles.skillItemBox}>
              <img src={figma} alt="figma" className={styles.skillItem} />
            </div>
            <div className={styles.skillItemBox}>
              <img src={scrum} alt="scrum" className={styles.skillItem} />
            </div>
          </div>
        </div>
      </Container>

      {/* Portofolio */}
      <Inhotel size={size} placement={placement} open={openInhotel} onClose={() => setOpenInhotel(false)} />
      <Pitect size={size} placement={placement} open={openPitect} onClose={() => setOpenPitect(false)} />
      <Uplink size={size} placement={placement} open={openUplink} onClose={() => setOpenUplink(false)} />
      <MTI size={size} placement={placement} open={openMti} onClose={() => setOpenMti(false)} />
      <Evote size={size} placement={placement} open={openEvote} onClose={() => setOpenEvote(false)} />
      <MTIMitra size={size} placement={placement} open={openMtiMitra} onClose={() => setOpenMtiMitra(false)} />
      <Hyponic size={size} placement={placement} open={openHyponic} onClose={() => setOpenHyponic(false)} />
      <Container id="#portofolio">
        <div className={styles.portoContainer}>
          <h5 className={styles.skillTitle}>My Portfolio</h5>
          <div className={styles.portoList}>
            <div className={styles.portoItem}>
              <img src={inhotel} alt="inhotel" className={styles.portoImg} />
              <div className={styles.portoDetail}>
                <div className={styles.portoTech}>
                  <p className={styles.portoText}>ReactJs</p>
                </div>
                <h5 className={styles.portoTitle}>Inhotel</h5>
                <p className={styles.portoText}>inhotel.id is a hotel direct booking service application launched by dailyhotel.id</p>
              </div>
              <button onClick={() => handleOpenInhotel("bottom")} className={styles.viewPorto}>
                <p className={styles.viewText}>View detail</p>
              </button>
            </div>

            <div className={styles.portoItem}>
              <img src={pitect} alt="inhotel" className={styles.portoImg} />
              <div className={styles.portoDetail}>
                <div className={styles.portoTech}>
                  <p className={styles.portoText}>ReactTs</p>
                </div>
                <h5 className={styles.portoTitle}>Pitect</h5>
                <p className={styles.portoText}>pitect is a construction project management collaboration application launched by PT Media kreasi Abadi</p>
              </div>
              <button onClick={() => handleOpenPitect("bottom")} to="" className={styles.viewPorto}>
                <p className={styles.viewText}>View detail</p>
              </button>
            </div>
            <div className={styles.portoItem}>
              <img src={uplink} alt="inhotel" className={styles.portoImg} />
              <div className={styles.portoDetail}>
                <div className={styles.portoTech}>
                  <p className={styles.portoText}>ReactJs</p>
                </div>
                <h5 className={styles.portoTitle}>Uplink</h5>
                <p className={styles.portoText}>uplink is a platform that makes it easy for entrepreneurs and influencers to share all information with one link</p>
              </div>
              <button onClick={() => handleOpenUplink("bottom")} to="" className={styles.viewPorto}>
                <p className={styles.viewText}>View detail</p>
              </button>
            </div>
            <div className={styles.portoItem}>
              <img src={mtiadmin} alt="inhotel" className={styles.portoImg} />
              <div className={styles.portoDetail}>
                <div className={styles.portoTech}>
                  <p className={styles.portoText}>Figma</p>
                </div>
                <h5 className={styles.portoTitle}>Medical Tourism Indonesia</h5>
                <p className={styles.portoText}>Indonesia Medical Tourism is a platform that connects the tourism ecosystem and the medical industry in Indonesia by PT CIPTA WISATA MEDIKA</p>
              </div>
              <button onClick={() => handleOpenMti("bottom")} to="" className={styles.viewPorto}>
                <p className={styles.viewText}>View detail</p>
              </button>
            </div>
            <div className={styles.portoItem}>
              <img src={evote} alt="inhotel" className={styles.portoImg} />
              <div className={styles.portoDetail}>
                <div className={styles.portoTech}>
                  <p className={styles.portoText}>VueJs</p>
                </div>
                <h5 className={styles.portoTitle}>Evote HIMIT</h5>
                <p className={styles.portoText}>e vote himit is an e voting application that is used for voting on himit pens</p>
              </div>
              <button onClick={() => handleOpenEvote("bottom")} to="" className={styles.viewPorto}>
                <p className={styles.viewText}>View detail</p>
              </button>
            </div>
            <div className={styles.portoItem}>
              <img src={mtimitra} alt="inhotel" className={styles.portoImg} />
              <div className={styles.portoDetail}>
                <div className={styles.portoTech}>
                  <p className={styles.portoText}>ReactJs</p>
                </div>
                <h5 className={styles.portoTitle}>Medical Tourism Indonesia Mitra</h5>
                <p className={styles.portoText}>Indonesia Medical Tourism is a platform that connects the tourism ecosystem and the medical industry in Indonesia by PT CIPTA WISATA MEDIKA</p>
              </div>
              <button onClick={() => handleOpenMtiMitra("bottom")} to="" className={styles.viewPorto}>
                <p className={styles.viewText}>View detail</p>
              </button>
            </div>
            <div className={styles.portoItem}>
              <img src={hyponic} alt="inhotel" className={styles.portoImg} />
              <div className={styles.portoDetail}>
                <div className={styles.portoTech}>
                  <p className={styles.portoText}>ReactJs</p>
                </div>
                <h5 className={styles.portoTitle}>Hyponic</h5>
                <p className={styles.portoText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere inventore nisi ullam iste quidem debitis</p>
              </div>
              <button onClick={() => handleOpenHyponic("bottom")} to="" className={styles.viewPorto}>
                <p className={styles.viewText}>View detail</p>
              </button>
            </div>
          </div>
        </div>
      </Container>
      <Footer className={styles.footer} />
    </div>
  );
}

export default Home;
