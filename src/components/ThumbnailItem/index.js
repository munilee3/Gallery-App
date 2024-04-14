import './index.css'

const ThumbnailItem = props => {
  const {eachPhoto, updateActiveImage, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = eachPhoto
  const onChangeImage = () => {
    updateActiveImage(id)
  }

  const activeImageClassName = isActive ? 'active-thumb-image' : 'thumb-image'
  return (
    <li className="thumb-image-container">
      <button type="button" className="thumb-image-btn" onClick={onChangeImage}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`${activeImageClassName}`}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
