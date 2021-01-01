import "../Styles/Addtrans.css";

function Addtran() {
  return (
    <div className="Addtran">
        <h3>Add new transaction</h3>
      <form >
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text"   placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount 
            </label>
          <input type="number"   placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
      <div>hello</div>
    </div>
  );
}

export default Addtran;
