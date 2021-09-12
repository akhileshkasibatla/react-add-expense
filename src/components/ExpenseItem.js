import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import { useState } from "react";

const ExpenseItem = (props) => {
  const { date, amount } = props;
  const [title, setTitle] = useState(props.title);

  const onClickHandler = () => {
    setTitle(`${title} is updated`);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={onClickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
