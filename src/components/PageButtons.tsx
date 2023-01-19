import { useState } from "react";

interface Props {
  pageNumber: number;
  setPageNumber: (num: number) => void;
}

export function PageButtons({ pageNumber, setPageNumber }: Props) {
  const [hover, setHover] = useState<boolean>(false);

  const divStyle = {
    display: "flex",
    justifyContent: "space-between",
  };

  const buttonStyle = {
    fontSize: "30px",
    backgroundColor: hover ? "blue" : "yellow",
    padding: "5px",
    borderRadius: "50%",
    color: hover ? "yellow" : "blue",
    border: hover ? "solid 5px yellow" : "solid 5px blue",
    cursor: "pointer",
    fontWeight: "bolder",
  };

  function changePage(num: number) {
    if (num === -1 && pageNumber !== 1) {
      setPageNumber(pageNumber - 1);
    }
    if (num === 1) {
      setPageNumber(pageNumber + 1);
    }
  }

  return (
    <div style={divStyle}>
      <button
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => changePage(-1)}
        style={buttonStyle}
      >
        {"<="}
      </button>
      <button
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => changePage(1)}
        style={buttonStyle}
      >
        {"=>"}
      </button>
    </div>
  );
}
