interface Props {
  name: string;
  size: string;
}

export function CharacterName({ name, size }: Props) {
  const pStyles = {
    backgroundColor: "blue",
    fontSize: size + "px",
    fontWeight: "bold",
  };

  return <p style={pStyles}>{name}</p>;
}
