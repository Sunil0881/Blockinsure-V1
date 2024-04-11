
import ABI from "../src/abi/Ins.json";
import { ethers } from "ethers";
import Web3 from "web3";
import { BigNumber } from "ethers";

const INSURE_CONTRACT = "0xD6C9E67eC6c2D00E2C54DF7e328e7F8652b1e80b";
// 0xD6C9E67eC6c2D00E2C54DF7e328e7F8652b1e80b
const isBrowser = () => typeof window !== "undefined";
const { ethereum } = isBrowser();

if (ethereum) {
  isBrowser().web3 = new Web3(ethereum); 
  isBrowser().web3 = new Web3(isBrowser().web3.currentProvider);
}

 

export const ADDPOLICY = async (_id, _policyName, _policyDetails, _coverageAmount, _premiumAmount, _durationYears) => {
   
    try {
        // Validate input values
        if (!_id || !_policyName || !_policyDetails || !_coverageAmount || !_premiumAmount || !_durationYears) {
            throw new Error("One or more arguments are undefined.");
        }

        const provider =
            window.ethereum != null
                ? new ethers.providers.Web3Provider(window.ethereum)
                : ethers.providers.getDefaultProvider();

        const signer = provider.getSigner();
        const coverageAmountBigNumber = BigNumber.from(_coverageAmount);
        const premiumAmountBigNumber = BigNumber.from(_premiumAmount);
        const durationYearsBigNumber = BigNumber.from(_durationYears);
        const Role = new ethers.Contract(INSURE_CONTRACT, ABI, signer);
        const tokenId = await Role.addPolicy(_id, _policyName, _policyDetails, coverageAmountBigNumber, premiumAmountBigNumber, durationYearsBigNumber);
        alert('POLICY ADDED successfully!');
        return tokenId;
    } catch (error) {
        console.error('Error Adding Policy:', error);
    }
}


export const GETALLPOLICIES =async () => {
    try {
        // const provider = new ethers.providers.JsonRpcProvider(
        //     "https://sepolia.infura.io/v3/290819ba5ca344eea8990cb5ccaa8e6a"
        // );
        const provider = 
        window.ethereum != null
          ? new ethers.providers.Web3Provider(window.ethereum)
          : ethers.providers.getDefaultProvider();
    
        const signer = provider.getSigner();
        const Role = new ethers.Contract(INSURE_CONTRACT, ABI, signer);
        const answer = await Role.getAllPolicies();
        console.log(answer);
        return answer;
    } catch (error) {
        console.error('Error fetching Policies:', error);
    }
}


export const BUYPOLICY = async (id, { value: premiumWei }) => {
   
    try {

        const provider =
            window.ethereum != null
                ? new ethers.providers.Web3Provider(window.ethereum)
                : ethers.providers.getDefaultProvider();

        const signer = provider.getSigner();
        const Role = new ethers.Contract(INSURE_CONTRACT, ABI, signer);
        const tokenId = await Role.buyPolicy(id, { value: premiumWei });
        alert('POLICY Bought successfully!!');
        return tokenId;
    } catch (error) {
        console.error('Error Buying Policy:', error);
    }
}



export const GETCONTRACTBALANCE =async () => {
    try {
        // const provider = new ethers.providers.JsonRpcProvider(
        //     "https://sepolia.infura.io/v3/290819ba5ca344eea8990cb5ccaa8e6a"
        // );
        const provider = 
        window.ethereum != null
          ? new ethers.providers.Web3Provider(window.ethereum)
          : ethers.providers.getDefaultProvider();
    
        const signer = provider.getSigner();
        const Role = new ethers.Contract(INSURE_CONTRACT, ABI, signer);
        const answer = await Role.getContractBalance();
        const contractBalance = parseInt(answer, 16);
        return contractBalance;
    } catch (error) {
        console.error('Error fetching Balance:', error);
    }
}



export const WITHDRAW = async (amount) => {
   
    try {

        const provider =
            window.ethereum != null
                ? new ethers.providers.Web3Provider(window.ethereum)
                : ethers.providers.getDefaultProvider();

        const signer = provider.getSigner();
        const Role = new ethers.Contract(INSURE_CONTRACT, ABI, signer);
        const tokenId = await Role.withdraw(amount);
        alert('Amount Withdraw Successfully');
        return tokenId;
    } catch (error) {
        console.error('Error Withdrawing Amount:', error);
    }
}


export const GETUSERPOLICIES =async () => {
    try {
        // const provider = new ethers.providers.JsonRpcProvider(
        //     "https://sepolia.infura.io/v3/290819ba5ca344eea8990cb5ccaa8e6a"
        // );
        const provider = 
        window.ethereum != null
          ? new ethers.providers.Web3Provider(window.ethereum)
          : ethers.providers.getDefaultProvider();
    
        const signer = provider.getSigner();
        const Role = new ethers.Contract(INSURE_CONTRACT, ABI, signer);
        const answer = await Role.getUserPolicies(userAddress);
        console.log(answer);
        return answer;
    } catch (error) {
        console.error('Error fetching Policies:', error);
    }
}