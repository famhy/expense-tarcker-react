import React from "react";
import "../Styles/Addtrans.css";

import { connect } from "react-redux";
import { addTodo } from "../Redux/action";

function Addtran(props) {
  const [transaction, setTransaction] = React.useState({
    amount: 0,
    description: "",
  });

  const handleChange = (e) => {
    setTransaction({ ...transaction, [e.target.name]: e.target.value });
    
  };

  const onSubmit =()=>{
    console.log(transaction);
    props.addTodo(transaction);
    setTransaction({
      amount: 0,
      description: "",
    });
  }
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
        <input type="button" className="btn" onClick={()=>onSubmit()} value="Add transaction"/>
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (payload)=>{dispatch(addTodo(payload))},
     
    }
};

export default connect(null,mapDispatchToProps)(Addtran);
