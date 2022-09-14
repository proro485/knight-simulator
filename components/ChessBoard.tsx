import { Dispatch, SetStateAction, useState } from "react";
import { Selected } from "../pages";
import { legalMoves } from "../utils/Helper";

type LegalMove = {
  row: number;
  col: number;
};

type Props = {
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
  selected: Selected | undefined;
  setSelected: Dispatch<SetStateAction<Selected | undefined>>;
};

const ChessBoard = ({
  isActive,
  setIsActive,
  selected,
  setSelected,
}: Props) => {
  const [legal, setLegal] = useState<LegalMove[]>([]);

  const cols = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const rows = [8, 7, 6, 5, 4, 3, 2, 1];

  const handleClick = (row: number, col: number) => {
    setIsActive(true);
    setSelected({ row, col });
    setLegal(legalMoves(row, col));
  };

  return (
    <table>
      <tbody>
        {rows.map((row, idx) => {
          return (
            <tr key={idx}>
              {cols.map((col, index) => {
                const isWhite = row % 2 === index % 2;
                const isSelected =
                  row === selected?.row && index === selected?.col;
                const isLegal =
                  isActive &&
                  legal.find((move) => move.row === row && move.col === index);

                return (
                  <td
                    key={index}
                    className={`border border-black py-5 px-6 text-lg ${
                      isLegal
                        ? "bg-green-500 text-black"
                        : isSelected
                        ? "bg-primary text-white"
                        : isWhite
                        ? "bg-white text-black"
                        : "bg-black text-white"
                    }`}
                  >
                    <button
                      className={`btn btn-primary w-full border-none bg-inherit text-inherit hover:text-white`}
                      onClick={() => handleClick(row, index)}
                    >
                      {col}
                      {row}
                    </button>
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ChessBoard;
