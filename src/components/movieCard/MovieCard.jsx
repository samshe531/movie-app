import React from 'react';
import "./movieCard.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const MovieCard = ({movie}) => {
  return (
    <div className='carte'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movie.posterUrl} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
          {movie.description}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default MovieCard