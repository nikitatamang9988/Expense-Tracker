import { useExpense } from "../context/ExpenseContext";
import ExpenseItem from "./ExpenseItem";

export default function ExpenseList() {
  const { expenses } = useExpense();

  return (
    <div className="space-y-2">
      {expenses.map((exp) => (
        <ExpenseItem key={exp.id} expense={exp} />
      ))}
    </div>
  );
}
