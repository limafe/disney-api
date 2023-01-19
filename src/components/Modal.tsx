import { Character } from "../protocols/character-interface";
import { CharacterDetailedPartifications } from "./CharacterDetailedPartifications";
import { CharacterName } from "./CharacterName";
import { Image } from "./Image";

interface Props {
  showModalStatus: boolean;
  setModalFunction: () => void;
  character: Character;
}

export function Modal({ showModalStatus, setModalFunction, character }: Props) {
  const mainDivStyles = {
    position: "fixed" as "fixed",
    top: "0",
    left: "0",
    width: "100vw",
    height: "100vh",
    overflow: "auto",
    cursor: "pointer",
  };

  const modalDivStyles = {
    minHeight: "100vh",
    width: "500px",
    margin: "auto",
    backgroundColor: "green",
    border: "solid 5px",
    padding: "5px",
  };

  return showModalStatus ? (
    <div style={mainDivStyles} onClick={() => setModalFunction()}>
      <div style={modalDivStyles}>
        <Image link={character.imageUrl} size={"300"} />
        <CharacterName name={character.name} size={"40"} />
        <CharacterDetailedPartifications character={character} />
      </div>
    </div>
  ) : (
    <></>
  );
}
