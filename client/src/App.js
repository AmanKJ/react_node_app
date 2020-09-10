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

  return <div>{response}</div>;
}

export default App;
