import React, { useState } from "react";

export default function ExpenseTracker() {
  const [expense, setExpense] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  const handleClick = () => {
    if (!expense || !amount) return;

    const newExpense = {
      id: expenses.length + 1,
      expense: expense,
      amount: amount,
    };
    setExpenses([...expenses, newExpense]);
    setExpense("");
    setAmount("");
  };

  const handleDelete = (key) => {
    setExpenses(expenses.filter((expenses) => expenses.id !== key));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">Expense Tracker</h1>
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <input
          className="w-full p-2 border rounded mb-4"
          placeholder="Expense"
          name="expense"
          type="text"
          onChange={(e) => setExpense(e.target.value)}
          value={expense}
        />
        <input
          className="w-full p-2 border rounded mb-4"
          placeholder="Amount"
          name="amount"
          type="number"
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
        />
        <button
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          onClick={handleClick}
        >
          Add Expense
        </button>
        <ul className="mt-6 w-full">
          {expenses.map((expenses) => (
            <li
              key={expenses.id}
              className="flex justify-between items-center bg-gray-50 p-3 rounded mb-2 shadow-sm"
            >
              <div>{expenses.expense}</div>
              <div>${expenses.amount}</div>
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => handleDelete(expenses.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
