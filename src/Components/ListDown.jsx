import Expense from "./Expense";
import Income from "./Income";

export default function ListDown({ list }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
      <Income list={list} />
      <Expense />
    </div>
  );
}
