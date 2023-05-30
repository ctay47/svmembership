const Web3 = require('web3');
const ABI = require('../contractABI.json');

const web3 = new Web3('https://mainnet.infura.io/v3/bca1d8a21c3449c3adbf94c69f75c48d');

// Function to check if an address owns an NFT
const verifyNFTOwnership = async (address, contractAddress, tokenId) => {
    // Initialize a new contract instance
    const contract = new web3.eth.Contract(ABI, contractAddress);

    // Call the contract's ownerOf method for the tokenID
    const owner = await contract.methods.ownerOf(tokenId).call();

    // Return true if the owner address matches the user's address
    return owner.toLowerCase() === address.toLowerCase();
};

module.exports = { verifyNFTOwnership };
