import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { Modal } from "./components/Modal";
import { StarshipCard } from "./components/StarshipCard";
import { Input } from "./components/ui/input";

function App() {
  const [starships, setStarships] = useState<any[]>([]);

  const [modalOpened, setModalOpened] = useState<boolean>(false);
  const [selectedSs, setSelectedSs] = useState<any>();
  const [filter, setFilter] = useState("");

  const filtered = useMemo(
    () =>
      filter.length > 0
        ? starships.filter((ss) =>
            ss.name.toLowerCase().includes(filter.toLowerCase())
          )
        : starships,
    [filter, starships]
  );

  async function getStarships() {
    try {
      const res = await axios.get("https://swapi.dev/api/starships");
      console.log(res);
      setStarships(res.data.results);
    } catch (ex: unknown) {
      console.log(ex);
    }
  }

  useEffect(() => {
    getStarships();
  }, []);

  return (
    <>
      <Modal
        open={modalOpened}
        setOpen={setModalOpened}
        title={`${selectedSs?.name}`}
        content={
          <>
            <p>MGLT: {selectedSs?.MGLT}</p>
            <p>Capacidade: {selectedSs?.cargo_capacity}</p>
            <p>Duração de Consumiveis: {selectedSs?.consumables}</p>
            <p>Custo: {selectedSs?.cost_in_credits}</p>
            <p>Tripulação: {selectedSs?.crew}</p>
            <p>Nota do Hyperdrive: {selectedSs?.hyperdrive_rating}</p>
            <p>Tamanho: {selectedSs?.length}</p>
            <p>Manufaturador: {selectedSs?.manufacturer}</p>
            <p>Velocidade Máxima: {selectedSs?.max_atmosphering_speed}</p>
            <p>Númeor de Passageiros: {selectedSs?.passengers}</p>
            <p>Classe: {selectedSs?.starship_class}</p>
          </>
        }
      />
      <div className="p-4">
        <Input
          onChange={(e) => setFilter(e.target.value)}
          value={filter}
          className="mb-4"
          placeholder="Pesquisar"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {filtered.map((ss) => (
            <StarshipCard
              ss={ss}
              onClick={() => {
                setSelectedSs(ss);
                setModalOpened(true);
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
