import React from 'react';



const CatGalleryImage = ({cat}) => {
  console.log(cat.image);
  return (
    <div className="cat-item" key={cat.image.id}>
      <img src={cat.image.url} />
    </div>
  )
}

export default CatGalleryImage;
