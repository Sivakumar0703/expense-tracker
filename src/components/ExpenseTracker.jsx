import React from 'react'
import { useCallback , useMemo } from 'react';
import { useState } from 'react'
import InputSection from './InputSection';
import ExpenseData from './ExpenseData';

const ExpenseTracker = () => {

    const [expenses , setExpenses] = useState([]);
    const [flag , setFlag] = useState(false);
    console.log("parent component rerendering");

    const handleClick = useCallback(() => {
        setFlag(prev => !prev);
    },[]);

    // using callback to avoid creation of new function reference on every render
    const addExpense = useCallback((description, amount) => {
        const newExpense = {
            id: Date.now(),
            description:description,
            amount:amount,
            date: new Date()
        }
        setExpenses ((previousExpenses) => [...previousExpenses , newExpense ]);
    } , []);

    const deleteExpense = useCallback((expenseId) => {
        setExpenses((previousExpenses) => previousExpenses.filter(expense => expense.id != expenseId))
    },[]);

    const totalExpense = useMemo(() => {
        // acc = total | cur = expense
        return expenses.reduce((acc,cur) => {
            acc = Number(acc) + Number(cur.amount);
            return acc
        },0)
    },[expenses]);

  return ( 
    <div id="expense-tracker" style={{margin:"20px"}}>
        <h1 id="title">EXPENSE TRACKER</h1>
        <br/>
        <InputSection addNewExpense={addExpense} handleParentState={handleClick}  />
        <ExpenseData expenses={expenses} removeExpense={deleteExpense}  />
        <div>
            <p>Total : Rs. {totalExpense} </p>
        </div>
        <br/>

        {/* to demonstrate useCase of callback hook */}
        {/* <div>
       <button className='btn' onClick={handleClick}>Change Parent State</button>
       </div> */}

    </div>
  )
}

export default ExpenseTracker