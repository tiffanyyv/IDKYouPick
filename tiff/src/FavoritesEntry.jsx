import React, { useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';


const FavoritesEntry = ({ fav }) => {
  const [editedFav, setEditedFav] = useState(false);
  const [newFavs, setNewFavs] = useState([]);

  useEffect(() => {
    getNewFavorites()
  }, [editedFav])

  const removeFromFavorites = async (e) => {
    await axios.put('http://localhost:3001/favorites', { params: e.target.id}).then(setEditedFav(true))
  }

  const getNewFavorites = async () => {
    await axios.get('http://localhost:3001/favorites', { params: {currentUser: localStorage.getItem("user")}})
      .then(results => {
        console.log(results, 'hi')
        setNewFavs(results.data)
      }).catch(err => {
        console.log(err)
      })
  }


  return (
    <div>
      {editedFav ?
      newFavs.forEach(fav => {
        return (
          <div className="favorite-entry">
          <Stack direction="row" spacing={1}>
          <h2><a href={fav.businessYelpURL} target="_blank" rel="noreferrer">{fav.businessName}</a></h2>
          <IconButton aria-label="delete">
            <DeleteIcon id={fav.businessName} onClick={e => removeFromFavorites(e)}/>
          </IconButton>
          </Stack>
        </div>
        )
      }) : <div className="favorite-entry">
        <Stack direction="row" spacing={1}>
        <h2><a href={fav.businessYelpURL} target="_blank" rel="noreferrer">{fav.businessName}</a></h2>
        <IconButton aria-label="delete">
          <DeleteIcon id={fav.businessName} onClick={e => removeFromFavorites(e)}/>
        </IconButton>
        </Stack>
      </div>}
    </div>
  )
}

export default FavoritesEntry;