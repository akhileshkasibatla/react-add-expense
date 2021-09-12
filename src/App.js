// import logo from "./logo.svg";
import "./App.css";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpenses";
import { useState } from "react";

const App = () => {
  const DUMMY_EXPENSES = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const [expenses, updateExpenses] = useState(DUMMY_EXPENSES);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      title: enteredExpenseData.enteredTitle,
      amount: enteredExpenseData.enteredAmount,
      date: enteredExpenseData.enteredDate,
      id: Math.random().toString(),
    };
    updateExpenses((previousExpenses) => {
      return [expenseData, ...previousExpenses];
    });
  };

  return (
    <>
      <NewExpense onAddExpenseData={saveExpenseDataHandler} />
      <Expenses items={expenses} />
    </>
  );
};

export default App;
