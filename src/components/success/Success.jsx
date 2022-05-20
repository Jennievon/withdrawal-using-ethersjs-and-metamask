import "./Success.css";
import { FiCheckCircle } from "react-icons/fi";
import { BsArrowRightShort } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";

function Success() {
  const { confirmTransaction, setConfirmTransaction, hash } =
    useContext(GlobalContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (confirmTransaction) {
      setConfirmTransaction(null);
    }
  });

  return (
    <div className="success container">
      <div>
        <FiCheckCircle />
      </div>
      <h2>Success</h2>
      <p>You've successfully sent your funds.</p>
      <a
        href={`https://ropsten.etherscan.io/tx/${hash.hash}`}
        target="_blank"
        rel="noreferrer"
        className="eth_scan"
      >
        View on Etherscan <BsArrowRightShort />
      </a>

      <div className="success_footer">
        <button
          className="cancel"
          onClick={() => navigate("/", { replace: true })}
        >
          Done
        </button>
      </div>
    </div>
  );
}

export default Success;
