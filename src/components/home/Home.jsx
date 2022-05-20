import { useContext, useState, useEffect, useCallback } from "react";
import { GlobalContext } from "../../context/GlobalState";
import "./Home.css";
import { BiUpArrowAlt } from "react-icons/bi";
import { FaEthereum } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Home() {
  const { address, connectWallet, accountBalance, history } =
    useContext(GlobalContext);

  const navigate = useNavigate();

  const [dollarBallance, setDollarBalance] = useState(0);

  const handleDollarBalChange = useCallback(() => {
    setDollarBalance(accountBalance * 2016.14);
  }, [accountBalance]);

  useEffect(() => {
    handleDollarBalChange();
  }, [accountBalance, handleDollarBalChange]);

  return (
    <div className="home container">
      <div className="header">
        {!address ? (
          <button className="connect_btn" onClick={connectWallet}>
            Connect wallet
          </button>
        ) : (
          <>
            <div className="logo">
              <div className="logo_inner"></div>
            </div>
            <div className="account_details">
              <h2>Account 1</h2>
              <p>{`${address.slice(0, 6)}...${address.slice(
                address.length - 4
              )}`}</p>
            </div>
          </>
        )}
      </div>

      {!address ? (
        <h3>Please connect to Metamask.</h3>
      ) : (
        <>
          <div className="assets">
            <h3>{accountBalance} ETH</h3>
            <p>{`$${dollarBallance.toFixed(2)}`} USD</p>
            <div className="up_arrow">
              <BiUpArrowAlt />
            </div>
            <button
              className="open_form"
              onClick={() => navigate("/send-transaction")}
            >
              Send
            </button>
          </div>

          <div className="history">
            {history.map((item, index) => (
              <div className="transaction" key={index}>
                <div className="eth_logo">
                  <FaEthereum />
                </div>
                <div className="txType_and_time">
                  <h4>Sent Ether</h4>
                  <p>
                    {item.date} {item.time}
                  </p>
                </div>
                <div className="amount">
                  <h4>-{item.amount} ETH</h4>
                  <p>${item.dollarAmount} USD</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
