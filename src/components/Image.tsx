interface Props {
  link: string;
  size: string;
}

export function Image({ link, size }: Props) {
  const imageStyles = {
    backgroundColor: "white",
    border: "solid 2px",
    borderRadius: "5%",
    width: size + "px",
  };

  return <img style={imageStyles} src={link} />;
}
