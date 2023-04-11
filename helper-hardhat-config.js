const { ethers } = require("hardhat")

//Define network - addresses configurations
const networkConfig = {
    5: {
        name: "goerli",
    },
    31337: {
        name: "hardhat",
        wethTokenAddress: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
        lendingPoolAddress: "0xB53C1a33016B2DC2fF3653530bfF1848a515c8c5",
        daiEthPriceFeedAddress: "0x773616E4d11A78F511299002da57A0a94577F1f4",
    },
}

const developmentChains = ["hardhat", "localhost", 31337]

module.exports = {
    networkConfig,
    developmentChains,
}
