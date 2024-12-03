import React , {useState} from 'react'


const InputSection = ({addNewExpense,handleParentState}) => {
  const [amount , setAmount] = useState("");
  const [description , setDescription] = useState("");
  console.log("input component rendering")

  function handleClick(){

    if(amount < 0){
      return alert("You have entered negative value");
    }

    if(amount && description){
      addNewExpense(description,amount);
      setAmount(0);
      setDescription("");
    }
  }


  return (
    <div id="input-section">

      {/* description field */}
       <div id="input-area">
       <label htmlFor="description">
          Description :
        </label> &nbsp;

        <input 
        id="description"
        type="text"
        placeholder="eg:bought shirt"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        />
       </div>

       {/* amount field */}
       <div>
       <label htmlFor="amount">
          Expense Amount :
        </label> &nbsp;

        <input 
        id="amount"
        type="number"
        placeholder='300'
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        />
       </div>

       <div>
        <button className="btn" onClick={handleClick}>Add Expense</button>
       </div>


    </div>
  )
}

export default React.memo(InputSection)