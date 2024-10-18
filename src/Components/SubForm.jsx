import { useState } from "react";
const expenses = [
  {
    id: 0,
    name: "Education",
  },
  {
    id: 1,
    name: "Food",
  },
  {
    id: 2,
    name: "Health",
  },
  {
    id: 3,
    name: "Bill",
  },
  {
    id: 4,
    name: "Insurance",
  },
  {
    id: 5,
    name: "Tax",
  },
  {
    id: 6,
    name: "Transport",
  },
  {
    id: 7,
    name: "Telephone",
  },
];

const income = [
  {
    id: 0,
    name: "Salary",
  },
  {
    id: 1,
    name: "Outsourcing",
  },
  {
    id: 2,
    name: "HBond",
  },
  {
    id: 3,
    name: "Dividend",
  },
];

let nextId = 0;
export default function SubForm() {
  const [option, setOption] = useState(true);

  const expenseItem = expenses.map((item) => (
    <option key={item.id}>{item.name}</option>
  ));
  const incomeItem = income.map((item) => (
    <option key={item.id}>{item.name}</option>
  ));

  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [list, setList] = useState([]);

  return (
    <div className="p-6 py-8 bg-[#F9FAFB] border rounded-md">
      <h2 className="text-3xl font-semibold leading-7 text-gray-800 text-center">
        Expense Tracker
      </h2>
      <form>
        <div className="flex divide-x divide-slate-400/20 overflow-hidden rounded-md bg-white text-[0.8125rem] font-medium leading-5 text-slate-700 shadow-sm ring-1 ring-slate-700/10 mt-6">
          <div
            className={
              option
                ? "active cursor-pointer text-center flex-1 px-4 py-2 hover:bg-slate-50 hover:text-slate-900"
                : "cursor-pointer text-center flex-1 px-4 py-2 hover:bg-slate-50 hover:text-slate-900"
            }
            onClick={() => {
              setOption(true);
            }}
          >
            Expense
          </div>
          <div
            className={
              option
                ? "cursor-pointer text-center flex-1 px-4 py-2 hover:bg-slate-50 hover:text-slate-900"
                : "active cursor-pointer text-center flex-1 px-4 py-2 hover:bg-slate-50 hover:text-slate-900"
            }
            onClick={() => {
              setOption(false);
            }}
          >
            Income
          </div>
        </div>

        <div className="mt-3">
          <label
            htmlFor="category"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Category
          </label>
          <div className="mt-2">
            <select
              id="category"
              name="category"
              autoComplete="category-name"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
              value={name}
              onChange={(e) => setName(e.target.value)}
            >
              {option ? expenseItem : incomeItem}
            </select>
          </div>
        </div>

        <div className="mt-3">
          <label
            htmlFor="amount"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Amount
          </label>
          <div className="mt-2">
            <input
              type="number"
              name="amount"
              id="amount"
              autoComplete="off"
              placeholder="12931"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
        </div>

        <div className="mt-3">
          <label
            htmlFor="date"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Date
          </label>
          <div className="mt-2">
            <input
              type="date"
              name="date"
              id="date"
              autoComplete="off"
              placeholder="12931"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 rounded-md bg-teal-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 w-full"
          onClick={() => {
            setList([
              ...list,
              { id: nextId++, name: name, amount: amount, date: date },
            ]);
          }}
        >
          Save
        </button>
      </form>
    </div>
  );
}
