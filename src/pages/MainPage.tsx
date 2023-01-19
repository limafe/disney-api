import { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { FlexBody } from "../components/FlexBody";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { PageButtons } from "../components/PageButtons";
import { api } from "../helpers/api";
import { Character } from "../protocols/character-interface";

export function MainPage() {
  const [characterList, setCharacterList] = useState<Character[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(1);

  async function getCharacters(num: number): Promise<void> {
    await api.getCharacters(num).then((data) => setCharacterList(data.data));
  }

  function changePage(num: number) {
    setPageNumber(num);
    getCharacters(num);
  }

  useEffect(() => {
    getCharacters(pageNumber);
  }, []);

  return (
    <div>
      <Header />
      <PageButtons pageNumber={pageNumber} setPageNumber={changePage} />
      <FlexBody>
        {characterList.map((character) => (
          <Card character={character} />
        ))}
      </FlexBody>
      <PageButtons pageNumber={pageNumber} setPageNumber={changePage} />
      <Footer />
    </div>
  );
}
