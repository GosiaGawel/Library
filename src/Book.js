import React from 'react'

function Book({ img, title, author, imageSize }) {
  return (
    <article className="book">
      <img
        src={img}
        alt={title}
        style={{
          width: imageSize,
          height: imageSize,
        }}
      />
      <h2>{title}</h2>
      <h4>{author} </h4>
    </article>
  )
}

export default Book
