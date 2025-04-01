import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import correct
import { moviesData } from "../../moviesData";
import { Col, Container, Row, Button } from "react-bootstrap";
import "./trailer.css"; 

const Trailer = () => {
  const params = useParams();
  const navigate = useNavigate(); // Assure-toi qu'il est utilisé DANS le composant
  const [film, setFilm] = useState({});

  useEffect(() => {
    setFilm(moviesData.find((el) => el.id === Number(params.id)));
  }, [params.id]);

  return (
    <div className="trailer-container">
      <Container>
        <Row>
          <Col md={8} className="film-details">
            <h2 className="film-title">{film.title}</h2>
          </Col>
          <Col md={12} className="trailer-video-container">
            <iframe 
              src={film.trailer} 
              allowFullScreen 
              className="trailer-video">
            </iframe>
          </Col>
        </Row>
        <div className="button-container">
          <Button variant="primary" onClick={() => navigate(-1)} className="go-back-button">
             Go Back
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Trailer;
