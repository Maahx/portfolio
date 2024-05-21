import ExpenseItem from "./components/Expenses/ExpenseItem";
import Expenses from "./components/Expenses/Costs";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    { id: 'e1', title: 'Jumbo Jet', amount: 6, date: new Date(1, 2, 28)},
    { id: 'e2', title: 'Chicken', amount: 76, date: new Date(2021, 2, 28)},
    { id: 'e3', title: 'Cow', amount: 0.001, date: new Date(2021, 2, 28)},
    { id: 'e4', title: 'Yul', amount: 450, date: new Date(2021, 2, 28)},
  ];

  const addExpenseHandler = expense => {
    console.log("in App.js");
    console.log(expense);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
