import { useEffect, useState } from "react";
import "./App.css";
import Web3 from "web3";
import detectEthereumProvider from '@metamask/detect-provider';


function App() {
  const [web3Api, setWeb3Api] = useState({
    provider: null,
    web3: null
  })

  const [account, setAccount] = useState(null)

  useEffect(() => {
    const loadProvider = async () => {
      const provider = await detectEthereumProvider();

      if (provider) {
        provider.request({method: "eth_requestAccounts"})
        setWeb3Api({
        web3: new Web3(provider),
        provider
      })
      } else {
        console.error('Please install MetaMask!')
      }
    }
  
    loadProvider()
  }, [])
  
  useEffect(() => {
    const getAccount = async () => {
      const accounts = await web3Api.web3.eth.getAccounts()
      setAccount(accounts[0])
    }
  
    web3Api.web3 && getAccount()
  }, [web3Api.web3])
  
  

  return (
    <>
      <div className="faucet-wrapper">
        <div className="faucet">
          <div className="is-flex-direction-row">
            <span>
              <strong>Account: </strong>
            </span>
          
            {
              account ?
                <div>account</div> : 
                <button className="button is-small">
                  Connect Wallet
                </button>
            }
          </div>
          <div className="balance-view is-size-2 mb-4">
            Balance: <strong>10</strong> ETH
          </div>
          <button className="button mr-2 is-primary">Donate</button>
          <button className="button is-link">Withdraw</button>
        </div>
      </div>
    </>
  );
}

export default App;
