import { useState, useRef } from "react";
import "./ExpenseForm.css";
import styled from "styled-components";

const CancelAddAction = styled.div`
  text-align: ${(props) => (props.toDisplay ? "right" : "unset")};
  margin-top: ${(props) => (props.toDisplay ? "6.5rem" : "unset")};
  margin-left: ${(props) => (props.toDisplay ? "6.5rem" : "unset")};
`;

const ExpenseForm = ({ onSaveExpenseData }) => {
  const [toDisplayInput, setToDisplayForm] = useState(true);
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleInputRef = useRef();
  const amountInputRef = useRef();
  const dateInputRef = useRef();

  const onTitleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };

  const onAmountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };

  const onDateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(titleInputRef);
    const expenseData = {
      enteredTitle: titleInputRef.current.value,
      enteredAmount: amountInputRef.current.value,
      enteredDate: new Date(dateInputRef.current.value),
    };
    onSaveExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  const onCancelHandler = () => {
    setToDisplayForm(false);
  };

  const onAddExpenseHandler = () => {
    setToDisplayForm(true);
  };

  if (toDisplayInput) {
    return (
      <form onSubmit={onSubmitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={onTitleChangeHandler}
              ref={titleInputRef}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={enteredAmount}
              onChange={onAmountChangeHandler}
              ref={amountInputRef}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              value={enteredDate}
              onChange={onDateChangeHandler}
              ref={dateInputRef}
            />
          </div>
          <CancelAddAction toDisplay={toDisplayInput}>
            <button type="button" className="cancel" onClick={onCancelHandler}>
              Cancel
            </button>
            <button
              type="button"
              className="add-expense"
              onClick={onSubmitHandler}
            >
              Add Expense
            </button>
          </CancelAddAction>
        </div>
      </form>
    );
  } else {
    return (
      <CancelAddAction toDisplay={toDisplayInput}>
        <button
          type="button"
          className="add-expense"
          onClick={onAddExpenseHandler}
        >
          Add Expense
        </button>
      </CancelAddAction>
    );
  }
};

export default ExpenseForm;
