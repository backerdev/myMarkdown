import { useState } from "react";
import RandomDivGenerator from "./DivsGenerator";

export default function MarkDown() {
  const [markdown, setMarkdown] =
    useState(`bg-slate-600.w-[150px].justify-between.flex.p-2#my>>MarkDOWN

  border-2.border-slate-600.p-2.my-2#How to use >> use hash key to start typing add a double > > will be nested best use cases for flexbox
  
  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500.text-slate-200.p-4#PLAY WITH TAILWIND`);

  function handleClear() {
    setMarkdown(``);
  }
  return (
    <section className="bg-slate-300 h-screen">
      <div className="classroom">
        <RandomDivGenerator item={markdown} />
      </div>
      <div className="console">
        <button
          className="rounded-none border-2 px-2 mb-2 hover:shadow-lg border-slate-700"
          onClick={handleClear}
        >
          clear
        </button>
        <textarea
          type="text"
          onChange={(e) => setMarkdown(e.target.value)}
          className="inputField"
          placeholder="Enter text here >> bg-slate-600.w-[150px].justify-between.flex.p-2#my>>MarkDOWN

          border-2.border-slate-600.p-2.my-2#How to use >> use hash key to start typing add a double > > will be nested best use cases for flexbox
          
          bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500.text-slate-200.p-4#PLAY WITH TAILWIND"
        />
      </div>
    </section>
  );
}
