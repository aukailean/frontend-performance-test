import { useState } from "react";
import { Table } from "./Table";

function App() {
  const [tableVisible, setTableVisible] = useState(false);

  return (
    <div className="text-center p-4">
      {!tableVisible ? (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            setTableVisible(true);
          }}
        >
          Render Table in React
        </button>
      ) : null}

      {tableVisible ? <Table /> : null}
    </div>
  );
}

export default App;
