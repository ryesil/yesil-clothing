import React from 'react'
import './Directory.styles.scss'

function Directory({category:{title,imageUrl}}) {

  return (
    <div className="directory-container">
        <div className="background-image" style={{backgroundImage:`url(${imageUrl})`}}/>
        <div className="category-body-container">
          <h2>{title}</h2>
          <p>SHOP NOW</p>
        </div>
      </div>
  )
}

export default Directory