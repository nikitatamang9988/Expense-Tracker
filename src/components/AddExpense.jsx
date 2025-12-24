import { useState } from "react";
import { useExpense } from "../context/ExpenseContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function AddExpense() {
  const { addExpense } = useExpense();
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = () => {
    if (amount == 0 || title == ""){
      return;
    }
    
    addExpense({
      id: Date.now(),
      title,
      amount: +amount,
    });
    setTitle("");
    setAmount("");
  };

  return (
    <div className="space-y-3 sm:space-y-4 ">
      <Input
        placeholder="Expense title"
        className="rounded-lg text-sm sm:text-base"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <Input
        placeholder="Amount"
        type="number"
        className="rounded-lg text-sm sm:text-base"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <Button className="w-full rounded-lg  py-5 sm:py-4" onClick={handleSubmit}>
        Add Expense
      </Button>
    </div>
  );
}
