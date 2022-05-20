import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import "./SendTransaction.css";
import { MdOutlineClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function SendTransaction() {
  const {
    formData,
    setFormData,
    confirmTransaction,
    sendTransaction,
    getHistory,
  } = useContext(GlobalContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    sendTransaction();
    getHistory();
  };

  useEffect(() => {
    if (confirmTransaction) {
      navigate("/success", { replace: true });
    }
  }, [confirmTransaction, navigate]);

  return (
    <div className="sendTX container">
      <div className="form_header">
        <h2>Send Ether</h2>
        <MdOutlineClose onClick={() => navigate("/", { replace: true })} />
      </div>

      <div className="form_body">
        <h3>Add Recipient</h3>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Public Address"
            value={formData.addressTo}
            onChange={(e) =>
              setFormData({ ...formData, addressTo: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="amount"
            value={formData.amount}
            onChange={(e) =>
              setFormData({ ...formData, amount: e.target.value })
            }
          />
        </form>
      </div>

      <div className="form_footer">
        <button
          className="cancel"
          onClick={() => navigate("/", { replace: true })}
        >
          Cancel
        </button>
        <button className="next" onClick={handleSubmit}>
          Next
        </button>
      </div>
    </div>
  );
}

export default SendTransaction;
