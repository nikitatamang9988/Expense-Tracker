import { useExpense } from "../context/ExpenseContext";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function ExpenseItem({ expense }) {
  const { deleteExpense } = useExpense();

  return (
    <Card className="p-4 flex justify-between items-center hover:shadow-md transition">
      <div>
        <h3 className="font-medium">{expense.title}</h3>
        <p className="text-sm text-gray-500">₹{expense.amount}</p>
      </div>

      <Button
        variant="destructive"
        size="sm"
        onClick={() => deleteExpense(expense.id)}
      >
      </Button>
    </Card>
  );
}
