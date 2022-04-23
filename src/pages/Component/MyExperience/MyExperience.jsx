import React from "react";
import Flip from "react-reveal/Flip";
import "./Myexperience.scss";
function MyExperience() {
  return (
    <div class="timeline-card">
      <h2 class="timeline-title">My Experience</h2>
      <div class="timeline-container">
        <div class="container-timeline left">
          <div class="date">Feb 2022 - Jun 2022</div>
          <div class="content">
            <h2>Frontend Developer</h2>
            <p>PT MEDIA KREASI ABADI</p>
            <div class="content-card">
              <p>Working on the frontend of the pitect.com website (project management collaboration application) using ReactTypescript technology.</p>
            </div>
          </div>
        </div>
        <div class="container-timeline right">
          <div class="date">Nov 2021 - Feb 2022</div>
          <div class="content">
            <h2>UI/UX Designer dan Frontend Developer</h2>
            <p>PT CIPTA WISATA MEDIKA</p>
            <div class="content-card">
              <p>Design and create a mockup of the Medical Tourism Indonesia admin page website, Implementing a mockup of the website into a web display.</p>
            </div>
          </div>
        </div>
        <div class="container-timeline left">
          <div class="date">Jan 2022 - Now</div>
          <div class="content">
            <h2>Frontend Developer</h2>
            <p>Pekerja Lepas</p>
            <div class="content-card">
              <p>January - February 2022, Working on the frontend of the www.uplink.id website using ReactJS technology. February - April 2022, Working on the frontend of the Inhotel.id website by dailyhotel using ReactJS technology.</p>
            </div>
          </div>
        </div>
        <div class="container-timeline right">
          <div class="date">Jun 2021 - Okt 2021</div>
          <div class="content">
            <h2>Web Specialists dan Creative Designer</h2>
            <div class="content-card">
              <p>Design, build, and monitor the website www.3ecoshoes.com. Create posters, banners, social media feeds. Take and edit catalog photos.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyExperience;
