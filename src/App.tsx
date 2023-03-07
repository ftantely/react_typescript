import React from "react";
import TextField from "./TextField";

function App() {
  return (
    <div>
      <TextField
        text="hello"
        person={{ firstName: "Tantely", lastName: "Rambeloson" }}
      />
    </div>
  );
}

export default App;
