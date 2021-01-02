import "../Styles/Incexp.css";

import { connect } from "react-redux";

function Incexp(props) {
 let income=0.0;
 let expense=0.0;
  return (
    <div className="Incexp">
      <div className="income">
        INCOME {props.transactionList.map(transaction=>{
           
            if(parseFloat(transaction.amount)>=0){
              
              income=income+parseFloat(transaction.amount)
            }
            console.log(income)
           

        })
        } 
        <span>${income}</span>
      </div>
      <div className="expense">
        EXPENSE {props.transactionList.map(transaction=>{
           
           if(parseFloat(transaction.amount)<0){
             
            expense=expense+parseFloat(transaction.amount)
           }
           console.log(expense)
          

       })
       } 
       <span>- ${Math.abs(expense)}</span>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  
  // contactList: state.contactListReducer
  transactionList :state
});

export default connect(mapStateToProps,null)(Incexp);
