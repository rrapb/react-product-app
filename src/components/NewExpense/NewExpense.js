import React from 'react';
import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) =>{
    const [isEdited, setIsEdited] = useState(false);
    const saveExpenseDataHandler = (enterData) =>{
        const expenseData = {
            ...enterData,
            id: Math.random().toString()
        };
            props.onAddExpenseHandler(expenseData);
            setIsEdited(false);
    };

    const editHandler = () =>{
        setIsEdited(true);
    };
    const stopEditing = () =>{
    setIsEdited (false);
    }
    return <div className='new-expense'>
        
       {!isEdited && <button onClick={editHandler}>New Expense</button>}
       {isEdited && <ExpenseForm onSaveExpenseDataHandler ={saveExpenseDataHandler} onCancel ={stopEditing}/>}

        </div>
};

export default NewExpense;