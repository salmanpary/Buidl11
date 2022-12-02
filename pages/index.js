import SocialLogin from "@biconomy/web3-auth";
export default function Home() {
  // init wallet
  const walletconnect = async () => {
    const socialLoginSDK = new SocialLogin();
    await socialLoginSDK.init("0x5"); // Enter the network id in hex) parameter
    socialLoginSDK.showConnectModal();
    socialLoginSDK.showWallet();
    if (!socialLoginSDK?.web3auth?.provider) return;
const provider = new ethers.providers.Web3Provider(
    socialLoginSDK.web3auth.provider,
);
const accounts = await provider.listAccounts();
console.log("EOA address", accounts)
// get signature
const signature = await socialLoginSDK.whitelistUrl('https://yourdomain.com');

// pass while initialization
// using current active chain as Goerli (chainId 5)
// const socialLoginSDK = await socialLoginSDK.init(ethers.utils.hexValue(5), {
//   'http://localhost:3001': signature
// });
  };

  // show connect modal
  socialLoginSDK.showWallet();
  return <div className="text-5xl">Wagmi</div>;
}
