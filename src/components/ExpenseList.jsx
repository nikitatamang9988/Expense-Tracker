import { useExpense } from "../context/ExpenseContext";
import ExpenseItem from "./ExpenseItem";

export default function ExpenseList() {
  const { expenses } = useExpense();

  return (
    <div className="max-h-[60vh] sm:max-h-[400px] overflow-y-auto space-y-2">
      {expenses.map((exp) => (
        <ExpenseItem key={exp.id} expense={exp} />
      ))}
    </div>
  );
}
