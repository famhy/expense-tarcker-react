import React from 'react'

import "../Styles/History.css";
import { connect } from "react-redux";

function History(props) {
  console.log(props.transactionList)
  return (
    <div className="History">
        <h3>History</h3>
    <ul>
      {props.transactionList.map(transaction=>{
      
       return <li className="plus" id={transaction.id}>
        {transaction.description}
        <span>
        {transaction.amount}
      </span>
      <button>
        X
      </button>
      </li>
        
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

export default  connect(mapStateToProps,null)(History);
