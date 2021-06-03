const CatGalleryImage = ({cat}) => {
  return (
    <div className="cat-item" key={cat.id}>
      <img src={cat.url} alt={cat.id} />
    </div>
  )
}

export default CatGalleryImage;