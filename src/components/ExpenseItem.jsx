import { useExpense } from "../context/ExpenseContext";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function ExpenseItem({ expense }) {
  const { deleteExpense } = useExpense();

  return (
    <Card
      className="p-4
  flex flex-col gap-3
  sm:flex-row sm:justify-between sm:items-center
  hover:shadow-md transition
  bg-pink-100
  w-full"
    >
      <div>
        <h3 className="font-medium">{expense.title}</h3>
        <p className="text-sm text-gray-500">₹{expense.amount}</p>
      </div>

      <Button
        variant="destructive"
        size="sm"
        className="w-full sm:w-auto"
        onClick={() => deleteExpense(expense.id)}
      >
        X
      </Button>
    </Card>
  );
}
