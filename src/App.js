import React, { useState } from "react";

function App() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [result, setResult] = useState(0);

  return (
    <>
      Valor de a: <input value={a} onChange={e => setA(e.target.value)} /><br />
      Valor de b: <input value={b} onChange={e => setB(e.target.value)} /><br />
      <button onClick={() => setResult(Number(a) + Number(b))}>Somar</button><br />
      Resultado da soma é <h1>{result}</h1>
    </>
  );
}

export default App;
