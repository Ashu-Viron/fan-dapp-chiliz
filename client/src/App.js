// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import fanToken from './FanToken';

function App() {
  const [account, setAccount] = useState('');
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    async function load() {
      const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
      const accounts = await web3.eth.requestAccounts();
      setAccount(accounts[0]);
      const balance = await fanToken.methods.balanceOf(accounts[0]).call();
      setBalance(balance);
    }
    load();
  }, []);

  return (
    <div>
      <h1>Fan Token DApp</h1>
      <p>Your account: {account}</p>
      <p>Your balance: {balance}</p>
    </div>
  );
}

export default App;
