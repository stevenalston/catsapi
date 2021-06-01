import React from 'react';



const CatDetailBox = ({cat}) => {
  return <div className="cat-item" key={cat.id}>
    <img src={cat.url} />
  </div>
}

export default CatDetailBox;
