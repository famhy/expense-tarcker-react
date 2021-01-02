import React from "react";
import "../Styles/Addtrans.css";

import { connect } from "react-redux";
import { addTodo } from "../Redux/action";

function Addtran() {
  const [transaction, setTransaction] = React.useState({
    amount: 0,
    description: "",
  });

  const handleChange = (e) => {
    setTransaction({ ...transaction, [e.target.name]: e.target.value });
    console.log(transaction);
  };

  return (
<div className="Addtran">
      <h3>Add new transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">Description</label>
          <input
            type="text"
            placeholder="Enter text..."
            name="description"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            placeholder="Enter amount..."
            name="amount"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
}

export default Addtran;
