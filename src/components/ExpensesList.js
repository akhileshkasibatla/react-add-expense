import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = ({ expenses }) => {
  return (
    <ul className="expenses-list">
      {expenses.length !== 0 ? (
        expenses.map((item) => {
          return <ExpenseItem {...item} key={item.id} />;
        })
      ) : (
        <h2 className="expenses-list__fallback">No Expenses Found</h2>
      )}
    </ul>
  );
};

export default ExpensesList;
