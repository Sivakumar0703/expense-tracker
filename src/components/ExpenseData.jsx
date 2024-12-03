import React from "react"

const ExpenseData = (props) => {
  return (
    <div style={{minHeight:"150px"}}>
        <ul style={{marginLeft:"15px"}}>
            {
                props.expenses?.map((expense) => {
                    return <li style={{margin:"5px"}} key={expense.id}>
                        <span> {expense.description} - </span>
                        <span> Rs. {expense.amount} </span> &nbsp;&nbsp;
                        <button className="btn delete-btn" onClick={() => props.removeExpense(expense.id)}>Delete</button>
                    </li>
                })
            }
        </ul>
    </div>
  )
}

export default React.memo(ExpenseData)