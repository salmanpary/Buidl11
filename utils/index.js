import { BigNumber, Wallet as EOAWallet } from "ethers";
import { JsonRpcProvider } from "@ethersproject/providers";
import configInfo from "../utils/configs/contractsInfo.json";
import { toast } from "react-toastify";

export { configInfo };

export function ellipseAddress(address = "", width = 10) {
  if (!address) {
    return "";
  }
  return `${address.slice(0, width)}...${address.slice(-width)}`;
}

export const getEOAWallet = (privateKey, provider) => {
  // defaults
  if (!provider) {
    // TODO
    // Fetch rpc url as per active chain id
    provider = "https://rpc.ankr.com/polygon_mumbai";
    // provider = ""
  }

  const wallet = new EOAWallet(privateKey);

  if (typeof provider === "string") {
    return wallet.connect(new JsonRpcProvider(provider));
  } else {
    return wallet.connect(provider);
  }
};

export const showErrorMessage = (message) => {
  toast.error(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const showInfoMessage = (message) => {
  toast.info(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const showSuccessMessage = (message) => {
  toast.success(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const copyToClipBoard = (copyMe) => {
  // if (!copyMe) showErrorMessage("Nothing to copy");
  if (!copyMe) return;
  try {
    navigator.clipboard.writeText(copyMe).then(() => {
      showSuccessMessage("Copied!");
    });
  } catch (err) {
    showErrorMessage("Failed to copy!");
  }
};

export const formatBalance = (value, decimals) => {
  const divideBy = BigNumber.from(10).pow(BigNumber.from(decimals));
  const balance = (parseFloat(value) / parseFloat(divideBy.toString())).toFixed(4);
  console.log(' formatBalance ', balance);
  // let res = ethers.utils.formatEther(balance);
  return balance.toString();
};
