import React, { useState } from 'react';
import { ListGroup } from 'react-bootstrap'

export default ({cat, info}) => {
  // set a boolean flag to render info conditionally
  const [showInfo, setShowInfo] = useState(false)

  const toggle = () => {
    // must use the function to set state properly
    setShowInfo(s => !s)
  }

  const renderInfo = () => (
    <div className="cat-info">
      <ListGroup>
        <ListGroup.Item>Breed: {cat.name}</ListGroup.Item>
        <ListGroup.Item>Weight: {cat.weight.imperial} LBS</ListGroup.Item>
        <ListGroup.Item>hypoallergenic: {cat.hypoallergenic === 0 ? 'No' : 'Yes'}</ListGroup.Item>
      </ListGroup>
    </div>
  );

  return (
    <div
      className="cat-details"
      style={{margin: '25px'}}
      onClick={toggle} >
      <img
        className="img-fluid rounded"
        src={cat.image.url}
        alt={cat.name}
      />
      {showInfo ? renderInfo() : null}
    </div>
  );
}