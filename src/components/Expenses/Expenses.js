import { useState } from "react";

import './Expenses.css';
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";
function Expenses(props){
  const [filterYear, setFilterYear] = useState('2020')
  const filterChangeHandler = selectedYear =>{
    setFilterYear(selectedYear);
  }

  const filteredExpenses = props.hargjimet.filter(expense =>{
    return expense.date.getFullYear().toString() === filterYear;
  });

    return(
      <div>
      <Card className="expenses">
        <ExpenseFilter
        selected={filterYear}
        onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList hargjimet ={filteredExpenses} />
      </Card>
    </div>
    );

}

export default Expenses;