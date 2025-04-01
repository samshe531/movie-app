import React from 'react';
import "./movieCard.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Rate from '../filterRate/Rating';
import { Link } from 'react-router-dom';

const MovieCard = ({movie}) => {
  return (
    <div className='carte'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movie.posterUrl} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Rate isRate={true} rate = {movie.rate} />
        <Card.Text>
          {movie.description}
        </Card.Text>
        <Link to={`/movie/${movie.id}`}>
        <Button variant="primary">Details</Button>
        </Link>
      </Card.Body>
    </Card>
    </div>
  )
}

export default MovieCard