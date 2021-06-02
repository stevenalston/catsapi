import React from 'react';

const CatSlide = ({cat}) => {
  return (
    <div onClick={() => displayInfo(cat)} key={cat.image.id}>
      <img src={cat.image.url} />
      <CatSlideInfo info={cat} />
    </div>
  );
}

const CatSlideInfo = (props) => {
  
}