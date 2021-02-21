import React, { useState } from "react";
import { Link, Redirect, Route, useParams, withRouter } from "react-router-dom";

const MediaCard = (props) => {
  const {netflixid, image, title, synopsis, avgrating, type} = props.mediaDetails;
  
  return (
    <div className="card_container">
        <Link to={`/media/${netflixid}`}>
          <img className="card_img" src={image} alt="movie poster" />
        </Link>
      <div className="card_content">
          <h4>{title}</h4>
          <p>{type}</p>
          <p>{synopsis}</p>
      </div>
      <div className="card_rating">
          <p>NetFlix Rating: {avgrating}</p>
      </div>
    </div>
  )
}

export default MediaCard;