import React, { type JSX } from "react";

function styleHashtags(content: string): JSX.Element {
  const regex = /(#\w+)/g;
  const parts = content.split(/(\s+)/).flatMap((part) => part.split(regex));

  return (
    <React.Fragment>
      {parts.map((part, index) => {
        if (part.startsWith("#")) {
          return (
            <span key={index} className="text-blue-500 font-bold">
              {part}
            </span>
          );
        }
        return <span key={index}>{part}</span>;
      })}
    </React.Fragment>
  );
}

export default styleHashtags;
