import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function FlexBody({ children }: Props) {
  const divStyles = {
    display: "flex",
    flexWrap: "wrap" as "wrap",
    justifyContent: "space-evenly",
  };

  return <div style={divStyles}>{children}</div>;
}
