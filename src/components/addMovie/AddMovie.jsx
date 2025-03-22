import React, { useState } from 'react';
import "./addMovie.css";
import { Button, Form, Modal } from 'react-bootstrap';



const AddMovie = ({movieAdd}) => {
//code qui gère l'affichage  de la boite modale
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
//   _______________________________________________
//les states pour récupérer les chaps entré dans la boite modale//
const [title, setTitle] = useState("");
const [description, setDescription] = useState("");
const [rate, setRate] = useState("");
const [posterUrl, setPosterUrl] = useState("");
const [trailer, setTrailer] = useState("");
const handleClick =()=> {if (!title || !description || !posterUrl || rate === "" || !trailer) {
    alert("Veuillez remplir tous les champs correctement !");
    return; // Stoppe la fonction si un champ est vide
  }
    const newMoviee = {id:Math.random(), title, description, rate, posterUrl, trailer};const newMovie = {id:Math.random(), title, description, rate, posterUrl, trailer};
    movieAdd(newMoviee)
    handleClose();
    setTitle("");
    setDescription("");
    setRate("");
    setPosterUrl("");
    setTrailer("");

    
};
  return (
    <div>
        <Button variant="primary" onClick={handleShow}>
        Add Film
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Film</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        </Modal.Body>
        
        
        <Form>
      <Form.Group className="mb-3" >
        
        <Form.Control type="text" 
        placeholder="Film Title"
        value={title}
        onChange={(e)=>setTitle(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" >
        
        <Form.Control 
        type="text" 
        placeholder="Description"
        value={description}
        onChange={(e)=>setDescription(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" >
        
        <Form.Control 
        type="text" 
        placeholder="URL Poster"
        value={posterUrl}
        onChange={(e)=>setPosterUrl(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" >
        
        <Form.Control type="number" 
        placeholder="Rate (0 to 5)"
        value={rate}
        onChange={(e) => {
            const value = Number(e.target.value);
            if (value >= 0 && value <= 5) {
              setRate(value);
            }
          }} />

      </Form.Group>
      <Form.Group className="mb-3" >
      <Form.Control type="text" 
        placeholder="Trailer"
        value={trailer}
        onChange={(e)=>setTrailer(e.target.value)} />
      </Form.Group>

      </Form>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClick}>
            Save film
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddMovie