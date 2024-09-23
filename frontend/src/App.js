import "./App.css";
import {
  useGetPackListQuery,
  useGetPickListQuery,
} from "./state/backendApiSlice";
import { useEffect } from "react";

function App() {
  const { data: pickData } = useGetPickListQuery(undefined);
  const { data: packData } = useGetPackListQuery(undefined);

  useEffect(() => {
    if (pickData) {
      console.log(pickData);
    }
  }, [pickData]);

  useEffect(() => {
    if (packData) {
      console.log(packData);
    }
  }, [packData]);

  return (
    <div className="App">
      <header className={"fixed flex w-full bg-[#282c34] text-white p-1 gap-2"}>
        <h1 className={"text-4xl flex-grow "}>Logistics</h1>
      </header>
      <section className={"flex-1 text-white bg-[#1d2025] mt-12"}></section>
    </div>
  );
}

export default App;
