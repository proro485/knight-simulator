export const legalMoves = (row: number, col: number) => {
  return [
    { row: row + 2, col: col + 1 },
    { row: row + 2, col: col - 1 },
    { row: row - 2, col: col + 1 },
    { row: row - 2, col: col - 1 },
    { row: row + 1, col: col + 2 },
    { row: row + 1, col: col - 2 },
    { row: row - 1, col: col + 2 },
    { row: row - 1, col: col - 2 },
  ];
};
