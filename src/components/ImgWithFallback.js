import React from 'react'

const ImgWithFallback = ({
  src,
  avifsrc,
  fallback,
  type = 'image/webp',
  ...delegated
}) => {
  return (
    <picture>
      <source srcSet={avifsrc} type="image/avif" />
      <source srcSet={src} type={type} />
      <img src={fallback} {...delegated} />
    </picture>
  )
}

export default ImgWithFallback
