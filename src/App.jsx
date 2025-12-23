import Balance from "./components/Balance";
import AddExpense from "./components/AddExpense";
import ExpenseList from "./components/ExpenseList";

export default function App() {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-2xl shadow-lg space-y-6">
        <h1 className="text-2xl font-bold text-center">
          Expense Tracker
        </h1>

        <Balance />
        <AddExpense />
        <ExpenseList />
      </div>
    </div>
  );
}
