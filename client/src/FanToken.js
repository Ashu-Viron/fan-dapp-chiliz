import Web3 from "web3";
import FanToken from "./contracts/FanToken.json";

const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
const contractAddress = "4ffbc885846c12d1a7b36b1Ad8Fd8263481ebAb8";
const fanToken = new web3.eth.Contract(FanToken.abi, contractAddress);

export default fanToken;