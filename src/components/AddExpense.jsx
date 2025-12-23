import { useState } from "react";
import { useExpense } from "../context/ExpenseContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function AddExpense() {
  const { addExpense } = useExpense();
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = () => {
    addExpense({
      id: Date.now(),
      title,
      amount: +amount,
    });
    setTitle("");
    setAmount("");
  };

  return (
    <div className="space-y-4">
      <Input
        placeholder="Expense title"
        className="rounded-lg"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <Input
        placeholder="Amount"
        type="number"
        className="rounded-lg"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <Button className="w-full rounded-lg"
      onClick={handleSubmit}>
        Add Expense
      </Button>
    </div>
  );
}


