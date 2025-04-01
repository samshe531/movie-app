import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { moviesData } from "../../moviesData";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./description.css"; 

const Description = () => {
  const params = useParams();
  const [film, setFilm] = useState({});

  useEffect(() => {
    setFilm(moviesData.find((el) => el.id === Number(params.id)));
  }, [params.id]);

  return (
    <div className="description-container">
      <Container>
        <Row>
          <Col md={8} className="film-details">
            <h2 className="film-title">{film.title}</h2>
            <p className="film-description">{film.description}</p>
          </Col>
          <Col md={4} className="posterUrl-container">
          <Link to={`/trailer/${film.id}`}>
              <img
                src={film.posterUrl}
                title={film.title}
                alt="posterURL"
                className="film-poster"
              />
            </Link>
          </Col>
        </Row>
        <Link to={`/`}><Button variant="primary">Go back</Button></Link>
      </Container>
    </div>
  );
};

export default Description;
