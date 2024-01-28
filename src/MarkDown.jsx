import { useState } from "react";
import RandomDivGenerator from "./DivsGenerator";

const list = ["h1", "red", "underline"];
export default function MarkDown() {
  const [markdown, setMarkdown] = useState(`h1#Hello\n #World`);
  const [isHide, setIsHide] = useState(true);
  function handleHide() {
    return setIsHide((prev) => setIsHide(!prev));
  }

  return (
    <section className="bg-slate-300">
      <textarea
        type="text"
        onChange={(e) => setMarkdown(e.target.value)}
        className="inputField"
        placeholder="Enter text here"
      />
      <div className="classroom">
        <RandomDivGenerator item={markdown} />

        <div>
          <div className={isHide ? "cheatsheet show" : "cheatsheet hide"}>
            <p>Greetings 👋 begin by entering</p>
            <span className="h1"> h1#Hello World</span>
            {list.map((item, ind) => (
              <p className=" code" key={ind}>
                {item}# your text
              </p>
            ))}
            <p>Just adding a comar will add several classes.</p>
            <p className="code">
              {list[0]},{list[1]},{list[2]}#yourTEXT
            </p>
            <p>If there are no classes, put a # before each new line.</p>
          </div>
        </div>
        <div className="hint" onClick={handleHide}>
          {isHide ? "Hide " : "Show "}Hint
        </div>
      </div>
    </section>
  );
}
