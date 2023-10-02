import Card from "../../../UI/card/Card";
import "./ExpenseItem.css"

function ExpenseItem({ expense }) {
  const month = expense.date.toLocaleString("en-US", { month: "long" });
  const day = expense.date.toLocaleString("en-US", { day: "2-digit" });
  const year = expense.date.getFullYear();

  return (
    <Card key={expense.id} className="expense-item">
      <div className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__year">{year}</div>
        <div className="expense-date__day">{day}</div>
      </div>
      <div className="expense-item__description">
        <h2>{expense.title}</h2>
        <div className="expense-item__price">${expense.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;