import { ethers } from "ethers";
import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import { Contract, providers, utils } from "ethers";
import {NFT_CONTRACT_ADDRESS,abi} from '../constants/index'

const Context  = createContext({
    account:null,
    signer : null,
    provider:null,
    buidl11:{}
})

const Provider = ({children})=>{
    const [account,setAccount] = useState(null)
    const [signer,setSigner] = useState(null)
    const [buidl11,setbuidle11] = useState({})
    const [providerr,setProvider] = useState(null)
    const web3Handler= async()=> {
        const account=await window.ethereum.request({
        method: "eth_requestAccounts",
        
        });
        console.log(account);
        setAccount(account[0]);
        const provider=new ethers.providers.Web3Provider(window.ethereum);
        
        const signe=provider.getSigner();
        setSigner(signe)
        setProvider(provider)
        loadcontract (signe);
        }
        
        const loadcontract=async(signer)=> {
        const buidl11=new ethers.Contract(NFT_CONTRACT_ADDRESS,abi,signer);
        console.log(buidl11);
        setbuidle11(buidl11);
        }

        useEffect(()=>{
            if(account==null){
                web3Handler()
            }
            loadcontract(signer)
        })
        const exposed = {
            account,
            signer,
            providerr,
            buidl11
        }
        return(
            <Context.Provider value={exposed}>
        {children}
            </Context.Provider>
        )
}

export const useWalletContext = () => useContext(Context)

export default Provider