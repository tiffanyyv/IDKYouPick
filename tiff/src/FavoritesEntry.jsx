import React from 'react';

const FavoritesEntry = ({ fav }) => {

  return (
    <div className="favorite-entry">
      <h3>{fav.businessName}</h3>
    </div>
  )
}

export default FavoritesEntry;