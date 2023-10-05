import { useState } from 'react';
import Card from '../../UI/card/Card';
import ExpenseItem from './expense-items/ExpenseItem';
import './Expenses.css';
import ExpensesChart from './expense-chart/ExpenseChart';
import ExpenseFilter from './expense-filter/ExpenseFilter';

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
        <ExpensesChart expenses={filteredItems} />
        {expensesContent}
      </Card>
    </div>
  );
}

export default Expenses;
