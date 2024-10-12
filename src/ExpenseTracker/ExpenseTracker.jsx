import React from 'react';
import './style.css';
import { useState } from 'react';

export default function ExpenseTracker() {

    const [expense, setExpense] = useState('');
    const [amount, setAmount] = useState('');
    const [expenses, setExpenses] = useState([]);



    const handleClick = () =>{
        if(!expense || !amount) return;
        
        const newExpense = {
            id: expenses.length+1,
            expense: expense,
            amount: amount,
        }
        setExpenses(([...expenses, newExpense]));
        console.log(expenses)
        setExpense('');
        setAmount('');
        
    }

    const handleDelete = (key)=> {
        setExpenses(expenses.filter((expenses) => expenses.id !== key));
    }

  return (
    <div className='expense'>
        <h1>Expense Tracker</h1>
        <input placeholder="Expense" name= "expense" type="text" onChange={(e)=>{setExpense(e.target.value)}} value={expense}/>
        <br />
        <input placeholder="Amount" name= "amount" type="number" onChange={(e)=>{setAmount(e.target.value)}} value={amount}/>
        <br />
        <br />
        <button onClick={handleClick}>Add Expense</button>
        <br />
        <br />
        <ul>
            {
                expenses.map((expenses)=>{
                    return <li key={expenses.id}>
                            <div>{expenses.expense}</div>
                            <div>{expenses.amount}</div>
                            <button onClick={()=>handleDelete(expenses.id)}>Delete</button>
                        </li>
                })
            }
        </ul>
    </div>
  )
}
