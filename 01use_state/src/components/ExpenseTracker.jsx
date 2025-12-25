import React, { useState } from "react";

export default function ExpenseTracker() {
  // const [form, setForm] = useState({
  //     title : "",
  //     amount : "",

  // })

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState();
  const [expenses, setExpenses] = useState([]);

  function addExpense(e) {
    e.preventDefault();

    let trimmedTitle = title.trim();
    let numAmount = Number(amount);

    if (!trimmedTitle || !numAmount || numAmount <= 0) return;

    const newExpense = {
      id: Date.now(),
      title: trimmedTitle,
      amount: numAmount,
    };

    setExpenses((prev) => [...prev, newExpense]);
    setTitle("");
    setAmount("");

    let total = expenses.reduce((sum, i) => sum + i.amount, 0)
  }
  return (
    <div>
      <form onSubmit={addExpense}>
        <input
          type="text"
          placeholder="Enter Expense Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="number"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <button type="submit">Add Expense</button>
      </form>

      <h3>Expenses</h3>
      {expenses.length===0 && <p>No Expenses added yet!</p>}

      <table border="1">
        <thead>
            <tr>
                <th>Title</th>
                <th>Amount (in Rupees)</th>
            </tr>
        </thead>

        <tbody>
          {expenses.map((exp) => (
            <tr key={exp.id}>
                <td>{exp.title}</td>
                <td>{exp.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Total: ₹{total}</h3>
    </div>
  );
}
