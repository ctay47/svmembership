// controllers/NFTController.js

const express = require('express');
const nfts = express.Router();
const { getAllNFTs, getNFT, createNFT, deleteNFT, updateNFT } = require('../queries/nftQueries.js');

nfts.get('/', async (req, res) => {
    const allNFTs = await getAllNFTs();
    if (allNFTs) {
        res.status(200).json(allNFTs);
    } else {
        res.status(500).json({ error: 'server error!' });
    }
});

nfts.get('/:id', async (req, res) => {
    const { id } = req.params;
    const nft = await getNFT(id);
    if (nft.id) {
        res.json(nft);
    } else {
        res.status(404).json({ error: 'not found' });
    }
});

nfts.post('/', async (req, res) => {
    const newNFT = await createNFT(req.body);
    if (newNFT.id) {
        res.status(201).json(newNFT);
    } else {
        res.status(500).json({ error: 'server error!' });
    }
});

nfts.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const deletedNFT = await deleteNFT(id);
    if (deletedNFT.id) {
        res.status(200).json({ message: 'NFT deleted successfully.' });
    } else {
        res.status(500).json({ error: 'server error!' });
    }
});

nfts.put('/:id', async (req, res) => {
    const { id } = req.params;
    const updatedNFT = await updateNFT(id, req.body);
    if (updatedNFT.id) {
        res.status(200).json(updatedNFT);
    } else {
        res.status(500).json({ error: 'server error!' });
    }
});

module.exports = nfts;

