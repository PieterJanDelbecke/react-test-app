import { useState } from "react";

function App() {
  const testFieldArray = [
    { id: "001", name: "Status" },
    { id: "002", name: "numbers" },
  ];

  return (
    <>
      <h1>Hello World</h1>
      <select onChange={(e) => setSelectedFieldNumber(e.target.value)}>
        {testFieldArray.map((field, index) => (
          <option key={field.id} value={index}>
            {field.name}
          </option>
        ))}
      </select>
    </>
  );
}

export default App;
