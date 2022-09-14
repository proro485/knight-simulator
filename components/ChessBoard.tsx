const ChessBoard = () => {
  const cols = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const rows = [8, 7, 6, 5, 4, 3, 2, 1];

  return (
    <table>
      <tbody>
        {rows.map((row) => {
          return (
            <tr>
              {cols.map((col, index) => {
                const isWhite = row % 2 === index % 2;
                return (
                  <td
                    className={`border border-black py-5 px-6 text-lg ${
                      isWhite ? "bg-white text-black" : "bg-black text-white"
                    }`}
                  >
                    <button className="btn btn-info w-full border-none bg-inherit text-inherit">
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
