import express from "express";
import UnogsClient from "../../../apiClient/UnogsClient.js";

const unogsRouter = new express.Router();

unogsRouter.get("/", async (req, res) => {
  try {
    const mediaData = await UnogsClient.getMediaData();
    res.status(200).json({ mediaData: mediaData })
  } catch (error) {
    res.status(500).json({ error: error })
  }
});



export default unogsRouter;