import { useState } from "react";
import Card from "../../UI/card/Card";
import ExpenseFilter from "../expense-filter/ExpenseFilter";
import ExpenseItem from "./expense-items/ExpenseItem";
import "./Expenses.css";

function Expenses({items}) {

  const [filteredYear, setFilteredYear] = useState("2020")

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }
  
  return (
    <div>
      <Card className="expenses">
      <ExpenseFilter selectedYear={filteredYear} onChangeFilter={filterChangeHandler}/>
        {items.map((expense) => (
          <ExpenseItem key={expense.id} expense={expense} />
        ))}
      </Card>
    </div>
  );
  }
  
  export default Expenses;