import React, { Component } from 'react';
import './app.css'

class Profile extends Component {

  render() {
    let artist = {name: '', followers: {total:''}, images: [{url:''}], genres:[]}
    artist = this.props.artist !== null ? this.props.artist : artist
    return (
      <div className="profile">
        <img 
          src={artist.images[0].url} 
          alt={artist.name}
          className="profile-image"
        />
        <div className="profile-info">
          <div className="profile-name">{artist.name}</div>
          <div className="profile-followers">
            {artist.followers.total} followers
          </div>
          <div className="profile-genres">
            {
              artist.genres.map((genre, k) => {
              return (
                <span key={k} className="profile-genre">{genre}</span>
              )
            })
            }
          </div>
        </div>
      </div>
    )
  }
}

Profile.propTypes = {
  artist: React.PropTypes.object
};

export default Profile;