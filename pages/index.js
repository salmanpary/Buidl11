import react, { useEffect, useState } from "react";
export default function Home() {
  const [walletConnected, setWalletConnected] = useState(false);

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
    connectWallet()
  })


  return <div className="text-5xl">Wagmi</div>;
}
