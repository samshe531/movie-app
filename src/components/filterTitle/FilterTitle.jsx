import React from 'react';
import { Form } from 'react-bootstrap';
import "./filterTitle.css";
const FilterTitle = ({searchTitle, setSearchTitle}) => {
  return (
    <div className='container'>
        <Form>
      <Form.Group className="mb-3" >
        
        <Form.Control 
        type="text" 
        placeholder="Search by film title"
        value={searchTitle}
        onChange={(e)=>setSearchTitle(e.target.value)} 
        />
      </Form.Group>
      </Form>
    </div>
  )
}

export default FilterTitle