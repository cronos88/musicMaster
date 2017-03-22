import React, { Component } from 'react';
import './app.css'

class Gallery extends Component {
  render() {
    const {tracks} = this.props
    return (
      <div>
        {tracks.map((track, k) => {
          const trackImg = track.album.images[0].url
          return (
            <article 
              key={k}
              className='track'
            >
              <img 
                src={trackImg}
                alt="track.name"
                className='track-img'
              />
              <p className='track-name'>
                {track.name}
              </p>
            </article>
          )
        })}
      </div>
    );
  }
}

export default Gallery;