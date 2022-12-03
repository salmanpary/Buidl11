import React, { useEffect, useRef, useState } from "react";
import Web3Modal from "web3modal";
import { abi, NFT_CONTRACT_ADDRESS } from "../constants";
export default function Home() {
  const [walletConnected, setWalletConnected] = useState(false);
  const web3ModalRef = useRef();

  const connectWallet = async () => {
    try {
      const addresses = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log(addresses);
      setWalletConnected(true);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    // if wallet is not connected, create a new instance of Web3Modal and connect the MetaMask wallet
    if (!walletConnected) {
      // Assign the Web3Modal class to the reference object by setting it's `current` value
      // The `current` value is persisted throughout as long as this page is open
      web3ModalRef.current = new Web3Modal({
       
        providerOptions: {},
        disableInjectedProvider: false,
      });

      //if metamask extension is not installed, show alert 
      if (typeof window.ethereum === 'undefined') {
       alert("Please install MetaMask extension");
      }
    

      connectWallet();
    }
  }, []);


  return <div className="text-5xl">Wagmi</div>;
}
