const Web3 = require('web3');
module.exports.getCurrentId = async function getCurrentId() {
    const web3 = new Web3(process.env.INFURA);
    const contract = new web3.eth.Contract(
        [
            {
                inputs: [],
                name: "getCurrentSupply",
                outputs: [
                  {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                  },
                ],
                stateMutability: "view",
                type: "function",
              },
        ],
        process.env.NFT_CONTACT_ADDRESS
      );
      const currentSupply = await contract.methods.getCurrentSupply().call();
      return parseInt(currentSupply,10);
}