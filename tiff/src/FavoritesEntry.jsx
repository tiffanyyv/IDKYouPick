import React, { useState } from 'react';


const FavoritesEntry = ({ fav }) => {
  const [showYelpURL, setShowYelpURL] = useState(false);

  const handleShowYelpURL = () => {
    setShowYelpURL(!showYelpURL);
    console.log(fav.businessYelpURL)
  }

  return (
    <div className="favorite-entry">
      <h2 onClick={handleShowYelpURL}>{fav.businessName}</h2>
      <div className="yelp-iframe">
        {showYelpURL && <iframe src={fav.businessYelpURL} title="yelp-link" scrolling="no" frameborder="0" onload="adjustIframe(this)"></iframe>}
      </div>
    </div>
  )
}

export default FavoritesEntry;