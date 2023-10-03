import { useState } from 'react';
import Card from '../../UI/card/Card';
import ExpenseFilter from '../expense-filter/ExpenseFilter';
import ExpenseItem from './expense-items/ExpenseItem';
import './Expenses.css';

function Expenses({ items }) {
  let expensesContent = <p className="not-found">No expenses found.</p>;
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredItems = items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  if (filteredItems.length > 0) {
    expensesContent = filteredItems.map(expense => <ExpenseItem key={expense.id} expense={expense} />);
  }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selectedYear={filteredYear} onChangeFilter={filterChangeHandler} />
        {expensesContent}
      </Card>
    </div>
  );
}

export default Expenses;
