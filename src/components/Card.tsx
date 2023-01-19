import { useState } from "react";
import { Character } from "../protocols/character-interface";
import { CharacterName } from "./CharacterName";
import { CharacterParticipations } from "./CharacterParticipations";
import { Image } from "./Image";
import { Modal } from "./Modal";

interface Props {
  character: Character;
}

export function Card({ character }: Props) {
  const [openModalStatus, setOpenModalStatus] = useState<boolean>(false);

  const divStyles = {
    backgroundColor: "yellow",
    width: "270px",
    padding: "5px",
    border: "solid 5px",
    margin: "5px",
    cursor: "pointer",
  };

  function ModalHandler() {
    const newModalStatus = openModalStatus ? false : true;
    setOpenModalStatus(newModalStatus);
  }

  return (
    <div style={divStyles} onClick={() => ModalHandler()}>
      <Image link={character.imageUrl} size="200" />
      <CharacterName name={character.name} size="25" />
      <CharacterParticipations
        films={character.films}
        shortFilms={character.shortFilms}
        tvShows={character.tvShows}
      />
      <Modal
        showModalStatus={openModalStatus}
        setModalFunction={ModalHandler}
        character={character}
      />
    </div>
  );
}
