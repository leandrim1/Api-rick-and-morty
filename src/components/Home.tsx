import { useState, useEffect } from "react";
import api from "../services/Api";

interface RickandMortyData {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: [string];
  url: string;
  created: string;
}

const Home = () => {
  const [rickandmorty, setRickandMorty] = useState<RickandMortyData | null>(null);
  const [characterId, setCharacterId] = useState<number>(1);

  async function loadRickandMorty(id: number) {
    try {
      const response = await api.get(`/${id}`);
      console.log("Dados da API:", response.data);
      setRickandMorty(response.data);
    } catch (error) {
      console.log("Erro:", error);
    }
  }

  useEffect(() => {
    loadRickandMorty(characterId);
  }, [characterId]);

  const handleNext = () => {
    setCharacterId((prevId) => prevId + 1);
  };

  const handlePrevious = () => {
    setCharacterId((prevId) => (prevId > 1 ? prevId - 1 : 1));
  };

  return (
    <section className="h-full select-none">
      <div className="flex flex-col justify-center place-items-center gap-15 mt-30 lg:flex-row ">
        <div className="w-100 h-57 rounded-tl-2xl rounded-tr-2xl border-b-2  bg-gray-900 text-center pt-2">
          {rickandmorty ? (
            <div className="w-100 h-115 rounded-tl-2xl border-b-2  text-center justify-items-center pt-2 ">
              <img
                src={rickandmorty.image}
                alt={rickandmorty.name}
                className="object-left w-50 pb-6"
              />
              <div>{rickandmorty.name}</div>
              <div>Status: {rickandmorty.status}</div>
              <p>Species: {rickandmorty.species}</p>
              <p>Gender: {rickandmorty.gender}</p>
              <p>Origin: {rickandmorty.origin.name}</p>
              <p>Location: {rickandmorty.location.name}</p>
              <p>Created: {new Date(rickandmorty.created).toLocaleString()}</p>
              <div className="flex justify-between mt-4 bg-indigo-950 border-l-2 border-r-2">
                <button onClick={handlePrevious} disabled={characterId === 1} className="w-40 pl-2 pr-10">
                  Previous
                </button>
                <button onClick={handleNext} className="pr-10">
                  Next
                </button>
              </div>
            </div>
          ) : (
            <div>Loading...</div>
          )}
          
        </div>
      </div>
    </section>
  );
};

export default Home;
