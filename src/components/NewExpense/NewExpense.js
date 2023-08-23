import React, {useState} from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    // console.log(expenseData);

    props.onAddExpense(expenseData);
    setIsEditing(false)
  };

  const [isEditing, setIsEditing] = useState(false)

  const startEditingHandler = ()=>{
    setIsEditing(true)
  }

  const stopEditing = ()=>{
    setIsEditing(false)
  }

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onCancel={stopEditing} onSaveExpenseData={saveExpenseDataHandler} />}
    </div>
  );
};

export default NewExpense;
