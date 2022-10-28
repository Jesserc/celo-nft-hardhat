import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

// require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: ".env" });

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    alfajores: {
      url: "https://alfajores-forno.celo-testnet.org",
      accounts: [process.env.KEY!],
      chainId: 44787,
    },
  },
};

export default config;
