import React, { useEffect, useState } from "react";

function DivGenerator({ item }) {
  const divs = [];
  const multipleDivs = [];
  // Function to generate a random number of div elements
  const [markdown, setMarkdown] = useState("");
  const [itemLength, setItemLength] = useState(0);
  useEffect(() => {
    function convertion() {
      let processingMarkdown = item.split("\n");

      let key_valueobjects = {};

      processingMarkdown.forEach((single, index) => {
        let [key, value] = single.split("#");
        let transform = `${key}_${index}`;

        if (!value) {
          key_valueobjects[transform] = ".";
        }
        key_valueobjects[transform] = value;
      });

      setMarkdown(key_valueobjects);

      setItemLength(processingMarkdown.length);
    }

    return convertion();
  }, [item]);
  const generateDivs = () => {
    for (let i = 0; i < itemLength; i++) {
      //   const randomContent = Math.random().toString(36).substring(7); // Generates random content

      const styleContent = Object.keys(markdown)
        [i].split("_")[0]
        ?.replace(/\./g, " "); // Generates random content: ;
      let derived = styleContent;

      // const contents = Object.values(markdown)[i]; // Generates random content: ;
      const content = Object.values(markdown)[i]; // Generates random content: ;
      let contentsSplit = Object.values(markdown)[i]?.includes(">>");
      contentsSplit = Object.values(markdown)[i]?.split(">>");
      // let styleSplit = contentsSplit[1]?.split("=")[0];
      // let subContentSplit = contentsSplit[1]?.split("=")[1];

      if (contentsSplit) {
        console.log(content);

        divs.push(
          <div className={`${derived} `}>
            {contentsSplit.map((string, indexx) => (
              <div key={indexx + string}>{string}</div>
            ))}
          </div>
        );
      } else {
        divs.push(
          <div key={i} className={`${derived} `}>
            {content}
            {/* <p className="text-blue-500">Styled</p> */}
          </div>
        );
      }
    }

    return divs;
  };

  return <div className="markdown">{generateDivs()}</div>;
}

export default DivGenerator;
