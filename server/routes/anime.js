import express from 'express';
import apiCache from 'apicache';
import * as controller from '../controllers/anime.js';

const router = express.Router();
const cache = apiCache.middleware;

router.get("/:name", controller.getAnime);
router.post("/", controller.getAnimeDetails);
router.post("/episode", controller.getAnimeEpisodes);
router.post("/episode-fix", controller.getEpisodeFix);
router.get("/recent/:page", cache("5 minutes"), controller.getRecent);
router.get("/popular/:page", cache("5 minutes"), controller.getPopular);

export default router;