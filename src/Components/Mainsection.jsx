import { useState } from "react";
import RightColumn from "./RightColumn";
import SubForm from "./SubForm";

export default function MainSection() {
  const [list, setList] = useState([]);

  return (
    <main className="relative mx-auto mt-10 w-full max-w-7xl">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <SubForm />
        <RightColumn list={list} />
      </section>
    </main>
  );
}
