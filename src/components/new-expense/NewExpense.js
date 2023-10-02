import "./NewExpense.css"
import ExpenseForm from "./expense-form/ExpenseForm";

function NewExpense(props) {
    const saveExpenseHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        }
        props.onAddExpense(expenseData);
    }


    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseHandler} />
        </div>
    )
}

export default NewExpense;