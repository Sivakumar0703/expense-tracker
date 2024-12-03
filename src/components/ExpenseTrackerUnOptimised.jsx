import React from 'react'
import { useCallback , useMemo } from 'react';
import { useState } from 'react'
import InputSection from './InputSection';
import ExpenseData from './ExpenseData';

const ExpenseTrackerUnOptimised = () => {

    const [expenses , setExpenses] = useState([]);
    const [flag , setFlag] = useState(false);
    console.log("parent component rendering")

    function handleClick(){
        setFlag(prev => !prev);
    }

    // using callback to avoid creation of new function reference on every render
    const addExpense = (description, amount) => {
        const newExpense = {
            id: Date.now(),
            description:description,
            amount:amount,
            date: new Date()
        }
        setExpenses ((previousExpenses) => [...previousExpenses , newExpense ]);
    };

    const deleteExpense = (expenseId) => {
        setExpenses((previousExpenses) => previousExpenses.filter(expense => expense.id != expenseId))
    };

    const totalExpense = useMemo(() => {
        // acc = total | cur = expense
        return expenses.reduce((acc,cur) => {
            acc = Number(acc) + Number(cur.amount);
            return acc
        },0)
    },[expenses]);

  return ( 
    <div>
        <h1>EXPENSE TREACKER</h1>
        <InputSection addNewExpense={addExpense} handleParentState={handleClick}  />
        <ExpenseData expenses={expenses} removeExpense={deleteExpense}  />
        <div>
            <p>Total : Rs. {totalExpense} </p>
        </div>


       {/* to demonstrate useCase of callback hook */}
       {/* <div>
       <button onClick={handleClick}>Change Parent State</button>
       </div> */}

    </div>
  )
}

export default ExpenseTrackerUnOptimised