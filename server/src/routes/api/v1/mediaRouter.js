import express from "express";
import objection from "objection";
const { ValidationError } = objection;
import UnogsClient from "../../../apiClient/UnogsClient.js"

import Media from "../../../models/Media.js";

const mediaRouter = new express.Router();

// mediaRouter.get("/", async (req, res) => {
//   try {
//     const media = await Media.query();
//     return res.status(200).json({ media: media})
//   } catch (error) {
//     return res.status(500).json({ errors: error })
//   }
// })

mediaRouter.get("/", async (req, res) => {
  let requestedMovies = [];
  try {
    const allMovies = req.body;
    return res.status(201).json({ media: requestedMovies });
    } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(422).json({ errors: error.data });
    }
    return res.status(500).json({ errors: error });
  }
});

mediaRouter.get("/:id", async (req, res) => {
  const mediaId = req.params.id;
  try {
    const mediaDetails = await UnogsClient.getMediaId(mediaId);
    debugger;
    return res.status(200).json({ mediaDetails: mediaDetails })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ errors: error });
  }
})

export default mediaRouter;