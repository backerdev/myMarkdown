import { useState } from "react";
import RandomDivGenerator from "./DivsGenerator";

const list = ["h1", "red", "underline"];
export default function MarkDown() {
  const [markdown, setMarkdown] = useState(`h1#Hello>>World`);
  const [isHide, setIsHide] = useState(false);
  function handleHide() {
    return setIsHide((prev) => setIsHide(!prev));
  }

  return (
    <section className="bg-slate-300 h-screen">
      <textarea
        type="text"
        onChange={(e) => setMarkdown(e.target.value)}
        className="inputField"
        placeholder="Enter text here"
      />
      <div className="classroom">
        <RandomDivGenerator item={markdown} />

        <div>
          <div className={isHide ? " show flex flex-col gap-2" : "hide"}>
            <span className="text-2xl font-bold underline tracking-wide">
              My MarkDown Summary
            </span>
            <p className="leading-5 my-2">
              {" "}
              Welcome to my website! Here's a brief overview of what you can
              expect:
            </p>
            <span className="text-2xl font-bold  tracking-wide">
              Tailwind CSS Styling
            </span>
            <p className="font-thin my-2 tracking-wide ">
              I've implemented Tailwind CSS to style the elements on my website,
              providing a clean and modern aesthetic. With Tailwind, I can
              easily customize the appearance of various components using
              utility classes. For instance, I use classes like
              <div className="bg-slate-800 text-slate-100 p-1 ">bg-red-600</div>
              to set background colors and flex for flexible layouts. It allows
              for quick and efficient styling without having to write custom CSS
              from scratch.
            </p>

            <ul className="list-disc px-4">
              <div className="text-2xl font-bold  tracking-wide">
                {" "}
                Markdown Syntax
              </div>
              <li>I use Tailwind CSS classes before #. </li>
              <li>
                Adding multiple classes follows this format: e.g.
                <span className="bg-slate-800 text-slate-100 p-1 ">
                  bg-red-600.text-3xl#YOUR-TEXT.
                </span>
              </li>
              <li>After #, I enter the text.</li>
              <li>
                For flexbox or nested div elements, I use >> followed by the
                text.
              </li>
            </ul>
          </div>
        </div>
        <div className="hint" onClick={handleHide}>
          {isHide ? "Hide " : "show How to use "}
        </div>
      </div>
    </section>
  );
}
