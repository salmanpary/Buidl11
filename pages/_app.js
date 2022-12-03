import '../styles/globals.css'
import { useWalletContext } from '../context/WalletProvider'

function MyApp({ Component, pageProps }) {
  return <useWalletContext>
  <Component {...pageProps} />
  </useWalletContext>
}

export default MyApp
