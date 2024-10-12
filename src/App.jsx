import { useState } from "react";
import Authentication from "./Firebase/Authentication";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="p-20">
        <Authentication />
      </header>
    </div>
  );
}

export default App;
