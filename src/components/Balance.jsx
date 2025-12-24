import { Card } from "@/components/ui/card";
import { useExpense } from "../context/ExpenseContext";

export default function Balance() {
  const { expenses } = useExpense();
  const total = expenses.reduce((sum, e) => sum + e.amount, 0);

  return (
    <Card
      className="
       p-4 sm:p-6
       text-center
       bg-gradient-to-r from-green-400 to-blue-500
       text-white
       rounded-xl"
    >
      <p className="text-sm sm:text-sm opacity-80">Total Balance</p>
      <h2 className="text-2xl sm:text-3xl font-bold mt-2">₹{total}</h2>
    </Card>
  );
}
