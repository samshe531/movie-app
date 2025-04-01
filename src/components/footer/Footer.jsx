import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./footer.css"; // Ajoute du style

const Footer = () => {
  return (
    <Card className="footer-container">
      <Card.Body>
        <Container>
          <Row>
            <Col md={6} className="footer-section">
              <h5>Movie App</h5>
              <p>Découvrez les meilleurs films et séries.</p>
            </Col>
            <Col md={6} className="footer-section">
              <h5>Liens Utiles</h5>
              <ul className="footer-links">
                <li><a href="/">Accueil</a></li>
                <li><a href="/">Films</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </Col>
           
          </Row>
        </Container>
      </Card.Body>
      <Card.Footer className="footer-bottom">
        &copy; 2025 Movie App - Tous droits réservés.
      </Card.Footer>
    </Card>
  );
};

export default Footer;
