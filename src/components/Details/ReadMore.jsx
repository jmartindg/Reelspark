import React, { useState } from "react";

const ReadMore = ({ children, maxCharacterCount = 100 }) => {
  const [isTruncated, setIsTruncated] = useState(true);

  const text = children;
  const resultString = isTruncated ? text.slice(0, maxCharacterCount) : text;

  const toggleIsTruncated = () => {
    setIsTruncated(!isTruncated);
  };

  return (
    <div>
      <p className="leading-6">{resultString}</p>
      <button
        onClick={toggleIsTruncated}
        className="inline-block text-sm cursor-pointer mt-2 px-2 py-1 text-black font-medium"
      >
        {isTruncated ? <>Read More &darr;</> : <>Read Less &uarr;</>}
      </button>
    </div>
  );
};

export default ReadMore;
