import type { NextPage } from "next";
import ChessBoard from "../components/ChessBoard";

const Home: NextPage = () => {
  return (
    <div className="mt-10 flex flex-col items-center space-y-10">
      <div className="text-5xl font-bold text-white">Chessboard</div>
      <ChessBoard />
    </div>
  );
};

export default Home;
