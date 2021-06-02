import React from 'react';



const CatGalleryImage = ({cat}) => {
  return (
    <div className="cat-item" key={cat.id}>
      <img src={cat.url} />
    </div>
  )
}

export default CatGalleryImage;
