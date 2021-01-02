import React from 'react'

import "../Styles/History.css";
import { connect } from "react-redux";
import { deleteTransaction } from "../Redux/action";
function History(props) {
  
  const onSubmit=(id)=>{
    console.log(id)
    props.deleteTransaction(id)
  }
  return (
    <div className="History">
        <h3>History</h3>
    <ul>
      {props.transactionList.map(transaction=>{
        if(parseInt(transaction.amount)>=0){
          return <li className="plus" id={transaction.id}>
          {transaction.description}
          <span>
          {transaction.amount}
        </span>
        <button onClick={()=>onSubmit(transaction.id)} >
          X
        </button>
        </li>
        }
      else{
        return <li className="minus" id={transaction.id}>
        {transaction.description}
        <span>
        {transaction.amount}
      </span>
      <button onClick={()=>onSubmit(transaction.id)} >
        X
      </button>
      </li>
      }
       
        
      })}
        <li class="plus">
        extra deal

        <span>
        +10
        </span>
        <button>
          X
        </button>
        </li>

        <li class="minus">
        extra deal

        <span>
        -10
        </span>
        <button>
          X
        </button>
        </li>

    </ul>
    </div>
  );
}

const mapStateToProps = state => ({
  
  // contactList: state.contactListReducer
  transactionList :state
});
const mapDispatchToProps = (dispatch) => {
  return {
    deleteTransaction: (payload)=>{dispatch(deleteTransaction(payload))},
     
    }
};
export default  connect(mapStateToProps,mapDispatchToProps)(History);
