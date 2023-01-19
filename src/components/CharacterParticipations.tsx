interface Props {
  films: string[];
  shortFilms: string[];
  tvShows: string[];
}

export function CharacterParticipations({ films, shortFilms, tvShows }: Props) {
  const divStyles = {
    backgroundColor: "blue",
  };
  const pStyles = {
    backgroundColor: "blue",
    fontSize: "20px",
  };

  return (
    <div style={divStyles}>
      <p style={pStyles}>Films: {films.length}</p>
      <p style={pStyles}>Short films: {shortFilms.length}</p>
      <p style={pStyles}>TV shows: {tvShows.length}</p>
    </div>
  );
}
