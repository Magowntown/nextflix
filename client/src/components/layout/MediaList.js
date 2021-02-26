import translateServerErrors from "../../services/translateServerErrors.js";
import React, { useState, useEffect } from "react";
import MediaCard from "./MediaCard.js"
import SearchBar from "./SearchBar.js"

const MediaList = (props) => {
  const [media, setMedia] = useState([]);

  const getMedia = async () => {
    try {
      const response = await fetch("/api/v1/media");

      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        const error = new Error(errorMessage);
        throw error;
      }
      const body = await response.json();
      setMedia(body.mediaData)
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`);
    }
  };

  useEffect(() => {
    getMedia();
  }, []);

  const mediaCards = media.map(mediaItem => {
    return (
      <MediaCard
        key={`${mediaItem.netflixid}`}
        mediaDetails={mediaItem}
      />
    )
  })

  return(
    <div>
      <SearchBar />
      <div className="heading">
        <h1>Movies & Shows</h1>
      </div>
      
      <div>
        <div className="card-area">
          <div className="container">
            {mediaCards}
          </div>
        </div>
      </div>
    </div>
  )

}

export default MediaList;