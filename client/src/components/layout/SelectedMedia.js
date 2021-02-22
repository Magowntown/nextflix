import React, { useEffect, useState } from "react";
import { Redirect, Route, useParams, withRouter } from "react-router-dom";
import translateServerErrors from "../../services/translateServerErrors.js";


const SelectedMedia = (props) => {
  const [errors, setErrors] = useState({});
  const [media, setMedia] = useState({
    image: "",
    title: "",
    synopsis: "",
    rating: "",
    type: "",
    released: "",
    runtime: ""
  });

  debugger;

  const getMedia = async () => {
    // debugger;
    // const mediaId = props.match.params.id;
    try {
      const response = await fetch(`/api/v1/media`);
      debugger;
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        const error = new Error(errorMessage);
        throw error;
      }
      const body = await response.json();
      setMedia(body.media);
    } catch (error) {
      console.error(`Err in fetch: ${error.message}`);
    }
  };
  useEffect(() => {
    getMedia();
  }, []);

  return(
    <div className="showpage_container">
      <div className="showpage_column">
        <div className="media_preview">
            <img src={media.image} />
            <h3>{media.title}</h3>
        </div>

        <div className="showpage_content">
            <p>{media.synopsis}</p>
            <h5>{media.rating}</h5>
            <p>{media.type}</p>
            <p>{media.released}</p>
            <p>{media.runtime}</p>
        </div>
      </div>
    </div>
  )
}

export default SelectedMedia;