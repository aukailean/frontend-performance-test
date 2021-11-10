import { useState } from "preact/hooks";
import Table from "./table";

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
          Render Table in Preact
        </button>
      ) : null}

      {tableVisible ? <Table /> : null}
    </div>
  );
}

export default App;
