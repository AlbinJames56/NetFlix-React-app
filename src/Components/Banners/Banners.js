import React from 'react'
import "./Banners.css"

function Banners() {
  return (
    <div className='banners'>
        <div className="content">
            <h1 className='title'>Movie Name</h1>
            <div className="banner-buttons">
                <button className="button">Play</button>
                <button className="button">My List</button>
            </div>
            <h1 className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dignissimos dolorem impedit?</h1>
        </div>
        <div className="fade_bottom"></div>
    </div>
  )
}

export default Banners