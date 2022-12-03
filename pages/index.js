import React, { useEffect, useRef, useState } from "react";
import { Contract, providers, utils } from "ethers";
import Web3Modal from "web3modal";
import { abi, NFT_CONTRACT_ADDRESS } from "../constants";
import { ethers } from "ethers";
import Listdisplay from "../Components/Listdisplay";
export default function Home() {
  const [account, setAccount] = useState(false);
  const [buidl11,setbuidle11] = useState({})
  const web3ModalRef = useRef();

  // const connectWallet = async () => {
  //   try {
  //     const addresses = await window.ethereum.request({
  //       method: "eth_requestAccounts",
  //     });
  //     console.log(addresses);
  //     setWalletConnected(true);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
const web3Handler= async()=> {
const account=await window.ethereum.request({
method: "eth_requestAccounts",

});
console.log(account);
setAccount(account[0]);
const provider=new ethers.providers.Web3Provider(window.ethereum);
const signer=provider.getSigner();
loadcontract (signer);
}

const loadcontract=async(signer)=> {
const buidl11=new ethers.Contract(NFT_CONTRACT_ADDRESS,abi,signer);
console.log(buidl11);
setbuidle11(buidl11);
}



  // const getProviderOrSigner = async (needSigner = false) => {
  //   // Connect to Metamask
  //   // Since we store `web3Modal` as a reference, we need to access the `current` value to get access to the underlying object
  //   const provider = await web3ModalRef.current.connect();
  //   const web3Provider = new providers.Web3Provider(provider);


  
  //   const signer = web3Provider.getSigner();
  //   const address = await signer.getAddress();
  //   //get balance of connected wallet
  //   const balance = await web3Provider.getBalance(address);

  // //convert balance to ether
  //   const etherBalance = ethers.utils.formatEther(balance);
  //   console.log("etherBalance", etherBalance);
  //   //if balance is less than 0.88 ether, show alert
  //   if (etherBalance < 0.001) {
  //     window.alert(etherBalance);

  //   }


  //   setAddressOfUser(address);
  //   console.log("address", address);

  //   if (needSigner) {
  //     const signer = web3Provider.getSigner();
  //     return signer;
  //   }
  //   return web3Provider;
  // };


const listPlayers = async () => {

  const player_names= await buidl11.getAdmin();
  console.log("admin", player_names);
};



  useEffect(() => {
    // if wallet is not connected, create a new instance of Web3Modal and connect the MetaMask wallet
    // if (!walletConnected) {
    //   // Assign the Web3Modal class to the reference object by setting it's `current` value
    //   // The `current` value is persisted throughout as long as this page is open
    //   // web3ModalRef.current = new Web3Modal({
    //   // //add network as localhost
    //   //   network: "localhost", 
    //   //   providerOptions: {},
    //   //   disableInjectedProvider: false,
    //   // });

    //   //if metamask extension is not installed, show alert 
    //   if (typeof window.ethereum === 'undefined') {
    //    alert("Please install MetaMask extension");
    //   }
    

    //   connectWallet();

    // }
    web3Handler();
  }, []);


  return <div>

  <button onClick={listPlayers}>List Players</button>
  <Listdisplay/>
  </div>; 


}
