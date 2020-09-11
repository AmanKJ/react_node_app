import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [response, setResponse] = useState("");

  useEffect(() => {
    callApi().then((res) => setResponse(res.data));
  }, []);

  const callApi = async () => {
    const res = await fetch("/data");
    const body = await res.json();
    return body;
  };

  return (
    <div>
      <h1>Header</h1>
      <div>{response}</div>
      {console.log("Front-end Loaded!")}
    </div>
  );
}

export default App;
