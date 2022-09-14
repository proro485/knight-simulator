import type { NextPage } from "next";
import { useState } from "react";
import ChessBoard from "../components/ChessBoard";

export type Selected = {
  row: number;
  col: number;
};

const Home: NextPage = () => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState<Selected>();

  const handleReset = () => {
    setIsActive(false);
    setSelected(undefined);
  };

  return (
    <div className="mt-10 flex flex-col items-center space-y-10">
      <div className="flex space-x-5">
        <div className="text-5xl font-bold text-white">Chessboard</div>
        <button className="btn" onClick={handleReset}>
          Reset
        </button>
      </div>
      <ChessBoard
        isActive={isActive}
        setIsActive={setIsActive}
        selected={selected}
        setSelected={setSelected}
      />
    </div>
  );
};

export default Home;
