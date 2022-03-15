import React from 'react';

const FavoritesEntry = ({ fav }) => {

  return (
    <div className="favorite-entry">
      <h2>{fav.businessName}</h2>
    </div>
  )
}

export default FavoritesEntry;