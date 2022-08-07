import React from "react";
import { Drawer } from "rsuite";
import styles from "./Inhotel.module.css";
import { Carousel } from "react-responsive-carousel";
import InhotelThumb1 from "../../../assets/images/inhotel/thumb1.png";
import Avatar from "../../../assets/images/avatar.jpeg";
function Inhotel(props) {
  return (
    <Drawer {...props}>
      <Drawer.Header>
        <Drawer.Title>Inhotel.id</Drawer.Title>
      </Drawer.Header>
      <Drawer.Body>
        <div className={styles.container}>
          <div className={styles.top}>
            <img src={Avatar} alt="me" className={styles.avatar} />
            <div className={styles.topTitle}>
              <h5 className={styles.nameProject}>Inhotel.id</h5>
              <p className={styles.infoCreator}>Created by Maskurnia Shidi With ReactJS</p>
            </div>
          </div>
          <Carousel className={styles.carouselContainer}>
            <div className={styles.thumbBox}>
              <img className={styles.thumbImage} src={InhotelThumb1} />
            </div>
            <div className={styles.thumbBox}>
              <img className={styles.thumbImage} src={InhotelThumb1} />
            </div>
          </Carousel>
          <div className={styles.projectInfo}>
            <h4 className={styles.projectInfoTitle}>Description</h4>
            <p className={styles.descriptionText}>inhotel.id is a hotel direct booking service application launched by dailyhotel.id</p>
            <h4 className={styles.projectInfoTitle}>Source</h4>
            <div className={styles.sourceBox}>
              <p className={styles.sourceTitle}>Github</p>
              <a href="https://github.com/Indaily/Indaily-Frontend.git" className={styles.sourceValue}>
                Github inhotel.id
              </a>
            </div>
            <div className={styles.sourceBox}>
              <p className={styles.sourceTitle}>Website</p>
              <a href="inhotel.id" className={styles.sourceValue}>
                on progress deploy at inhotel.id
              </a>
            </div>
          </div>
        </div>
      </Drawer.Body>
    </Drawer>
  );
}

export default Inhotel;
