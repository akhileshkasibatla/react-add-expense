import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import ReactDOM from "react-dom";

const NewExpense = ({ onAddExpenseData }) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpenseData(expenseData);
  };

  return ReactDOM.createPortal(
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>,
    document.getElementById("add-expense-root")
  );
};

export default NewExpense;
