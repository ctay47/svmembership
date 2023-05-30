const ethers = require('ethers');
const contractABI = require('../contractABI.json');

class EthService {
    constructor() {
        this.provider = new ethers.providers.JsonRpcProvider(process.env.INFURA_URL);
        this.contract = new ethers.Contract(process.env.CONTRACT_ADDRESS, contractABI, this.provider);
    }

    async getNFTBalance(userAddress) {
        try {
            let balance = await this.contract.balanceOf(userAddress);
            return balance;
        } catch (err) {
            console.log(err);
            throw new Error('Failed to get NFT balance');
        }
    }

    // You can add more contract interaction methods here...
}

module.exports = new EthService();
