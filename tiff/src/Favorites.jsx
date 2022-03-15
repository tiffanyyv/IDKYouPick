import React from 'react';
import axios from 'axios';
import FavoritesEntry from './FavoritesEntry.jsx';

const Favorites = ({ favs }) => {

  return (
    <div className="favorites-list">
      {favs.map((fav, idx) => {
        return (
          <div className="favorites-list-entry" key={`favorite-${idx}`}>
            <FavoritesEntry fav={fav}/>
          </div>
        )
      })}
    </div>
  )
}

export default Favorites;