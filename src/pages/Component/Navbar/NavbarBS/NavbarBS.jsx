import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import styles from "./NavbarBS.module.css";
function NavbarBS() {
  return (
    <Navbar collapseOnSelect expand="lg" className={styles.navbar}>
      <Container className={styles.navbarContainer}>
        <Navbar.Brand className={styles.Brand} href="#home">
          <h5 className={styles.brandTitle}>Maskur</h5>
          <h5 className={styles.brandTitle}>Dev</h5>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav className="justify-content-end">
            <Nav.Link className={styles.navItem} href="#about">
              About
            </Nav.Link>
            <Nav.Link className={styles.navItem} href="#experience">
              Experience
            </Nav.Link>
            <Nav.Link className={styles.navItem} href="#skill">
              Skill
            </Nav.Link>
            <Nav.Link className={styles.navItem} href="#portofolio">
              Portofolio
            </Nav.Link>
            <Nav.Link className={styles.navItem} href="#blog">
              Blog
            </Nav.Link>
            <Nav.Link className={styles.navItem} href="#contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarBS;
