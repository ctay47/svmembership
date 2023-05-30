// queries/nftQueries.js

const db = require('../db/dbConfig');

const getAllNFTs = async () => {
    try {
        const nfts = await db.any('SELECT * FROM nfts');
        return nfts;
    } catch (error) {
        console.log(error);
        return null;
    }
};

const getNFT = async (id) => {
    try {
        const nft = await db.one('SELECT * FROM nfts WHERE id = $1', [id]);
        return nft;
    } catch (error) {
        console.log(error);
        return null;
    }
};

const createNFT = async (nft) => {
    try {
        const newNFT = await db.one(
            'INSERT INTO nfts (name, description, owner) VALUES ($1, $2, $3) RETURNING *',
            [nft.name, nft.description, nft.owner]
        );
        return newNFT;
    } catch (error) {
        console.log(error);
        return null;
    }
};

const deleteNFT = async (id) => {
    try {
        const deletedNFT = await db.one('DELETE FROM nfts WHERE id = $1 RETURNING *', [id]);
        return deletedNFT;
    } catch (error) {
        console.log(error);
        return null;
    }
};

const updateNFT = async (id, nft) => {
    try {
        const updatedNFT = await db.one(
            'UPDATE nfts SET name = $1, description = $2, owner = $3 WHERE id = $4 RETURNING *',
            [nft.name, nft.description, nft.owner, id]
        );
        return updatedNFT;
    } catch (error) {
        console.log(error);
        return null;
    }
};

module.exports = {
    getAllNFTs,
    getNFT,
    createNFT,
    deleteNFT,
    updateNFT,
};
