import React, { useEffect, useState } from "react";

function DivGenerator({ item }) {
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
        key_valueobjects[transform] = value;
      });
      setMarkdown(key_valueobjects);

      setItemLength(processingMarkdown.length);
    }

    return convertion();
  }, [item]);
  const generateDivs = () => {
    const divs = [];
    const multipleContent = [];
    for (let i = 0; i < itemLength; i++) {
      //   const randomContent = Math.random().toString(36).substring(7); // Generates random content
      const styleContent = Object.keys(markdown)
        [i].split("_")[0]
        .replace(/,/g, " "); // Generates random content: ;

      let derived = styleContent;

      const contents = Object.values(markdown)[i]; // Generates random content: ;
      const content = Object.values(markdown)[i]; // Generates random content: ;
      const contentsSplit = contents?.split(">>");

      if (contentsSplit) {
        for (let j = 0; j < contentsSplit.length; j++) {
          multipleContent.push(<div>{contentsSplit[j]}</div>);
        }
      }

      divs.push(
        <div key={i} className={`${derived} `}>
          {content}
          {/* <p className="text-blue-500">Styled</p> */}
        </div>
      );
    }

    return divs;
  };

  return <div className="markdown">{generateDivs()}</div>;
}

export default DivGenerator;
