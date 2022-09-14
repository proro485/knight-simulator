import type { NextPage } from "next";
import { useState } from "react";
import ChessBoard from "../components/ChessBoard";

const Home: NextPage = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="mt-10 flex flex-col items-center space-y-10">
      <div className="text-5xl font-bold text-white">Chessboard</div>
      <ChessBoard isActive={isActive} setIsActive={setIsActive} />
    </div>
  );
};

export default Home;
