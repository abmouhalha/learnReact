import React, { useState, useEffect } from 'react';
import BattleShipBoard from "./components/BattleShipBoard";
import FetchShips from "./components/FetchShips";

function App() {
  const [ships, setShips] = useState([]);

  useEffect(() => {
    fetch('ship/shipType') // Remplacez 'shipType' par le type de navire que vous souhaitez récupérer
      .then((response) => response.json())
      .then((data) => {
        setShips(data);
      });
  }, []);

  return (
    <main>
      <FetchShips />
      <BattleShipBoard ships={ships} />
    </main>
  );
}

export default App;
