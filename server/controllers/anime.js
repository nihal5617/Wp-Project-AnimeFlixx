import AnimeModal from "../models/anime.js";

export const getAnime = async (req, res) => {
    try {
        const result = await AnimeModal.find({});
        res.status(200).json( result );
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
}