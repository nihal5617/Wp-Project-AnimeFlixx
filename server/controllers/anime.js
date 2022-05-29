import AnimeData from "@dovakiin0/anime-data"

const Anime = new AnimeData();

module.exports = {
  getPopular: async (req, res) => {
    Anime.getPopular(req.params.page)
      .then((animes) => {
        res.status(200).send(animes);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  },

  getEpisodeFix: async (req, res) => {
    Anime.getEpisodeFix(req.body.slug)
      .then((episodes) => {
        res.status(200).send(episodes);
      })
      .catch((err) => res.status(400).send(err));
  },

  getRecent: async (req, res) => {
    Anime.getRecent(req.params.page)
      .then((animes) => res.status(200).send(animes))
      .catch((err) => {
        res.status(400).send(err);
      });
  },

  getAnime: (req, res) => {
    Anime.searchAnime(req.params.name)
      .then((animes) => res.status(200).send(animes))
      .catch((err) => {
        res.status(400).send(err);
      });
  },

  getAnimeDetails: async (req, res) => {
    Anime.getAnimeInfo(req.body.uri)
      .then((animes) => res.status(200).send(animes))
      .catch((err) => {
        res.status(400).send(err);
      });
  },

  getAnimeEpisodes: (req, res) => {
    Anime.getEpisode(req.body.slug, req.body.ep)
      .then((episodes) => res.status(200).send(episodes))
      .catch((err) => {
        res.status(400).send(err);
      });
  },
};