import "./App.css";
import { useEffect } from "react";
import { AutoBatchEventHandler } from "./components/AutoBatchEventHandler";
import { AutoBatchOther } from "./components/AutoBatchOther";

function App() {
  console.log("appがレンダリングされた");
  useEffect(() => {
    console.log("useEffect");
    // strictModeだとこれが必ずしも一回だけ実装されるわけではなくなる?
  }, []);
  return (
    <div className="App">
      <AutoBatchEventHandler />
      <AutoBatchOther />
    </div>
  );
}

export default App;
