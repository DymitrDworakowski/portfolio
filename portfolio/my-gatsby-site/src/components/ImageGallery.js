import React from "react"
import { gallery, imageContainer, caption } from "./ImageGallery.module.css"

const ImageGallery = ({ children }) => (
  <div className={gallery}>
    {React.Children.map(children, (child, index) => (
      <div key={index} className={imageContainer}>
        {child}
        {child.props.caption && 
          <p className={caption}>{child.props.caption}</p>}
      </div>
    ))}
  </div>
)

export default ImageGallery