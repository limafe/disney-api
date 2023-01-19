import { Character } from "../protocols/character-interface";

interface Props {
  character: Character;
}

export function CharacterDetailedPartifications({ character }: Props) {
  const mainDivStyles = {
    textAlign: "left" as "left",
    backgroundColor: "green",
  };

  const itemDivStyles = {
    textAlign: "left" as "left",
    backgroundColor: "green",
  };

  const pStyles = {
    backgroundColor: "green",
    fontSize: "20px",
  };

  const labelStyles = {
    fontWeight: "bold",
    backgroundColor: "green",
    color: "yellow",
    padding: "5px",
    fontSize: "25px",
  };

  return (
    <div style={mainDivStyles}>
      <p style={pStyles}>
        <label style={labelStyles}>Films:</label>
        {character.films.length > 0 ? (
          character.films.map((item, index) => (
            <div style={itemDivStyles}>
              {index + 1}. {item}
            </div>
          ))
        ) : (
          <p style={pStyles}>Empty</p>
        )}
      </p>
      <br />
      <p style={pStyles}>
        <label style={labelStyles}>Short films:</label>
        {character.shortFilms.length > 0 ? (
          character.shortFilms.map((item, index) => (
            <div style={itemDivStyles}>
              {index + 1}. {item}
            </div>
          ))
        ) : (
          <p style={pStyles}>Empty</p>
        )}
      </p>
      <br />
      <p style={pStyles}>
        <label style={labelStyles}>TV shows:</label>
        {character.tvShows.length > 0 ? (
          character.tvShows.map((item, index) => (
            <div style={itemDivStyles}>
              {index + 1}. {item}
            </div>
          ))
        ) : (
          <p style={pStyles}>Empty</p>
        )}
      </p>
    </div>
  );
}
