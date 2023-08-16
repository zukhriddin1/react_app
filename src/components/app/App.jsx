import { useEffect, useState, useCallback } from "react";
import "./App.css";
import Counteritem from "../counter-item/counter-item";
const User = ({ forstName, lastName, link }) => {
  const [counter, setCounter] = useState(0);
  const [active, setActive] = useState(true);

  const onIncrement = () => setCounter((prevState) => prevState + 1);
  const onToggle = () => setActive((prevState) => !prevState);

  const counterGenerate = useCallback(() => {
    return new Array(counter)
      .fill("")
      .map((_, ind) => `Counter number ${ind + 1}`);
  }, [counter]);

  const colors = {
    color: active ? "red" : "green",
  };
  return (
    <div className="w-50 mx-auto">
      <div className="border p-3 mt-5">
        <p className="text-center" style={colors}>
          User activeted {counter}
        </p>
        <div className="d-flex justify-content-center">
          <button className="btn btn-success" onClick={onIncrement}>
            Increase
          </button>
          <button className="btn btn-warning" onClick={onToggle}>
            Toggle
          </button>
        </div>
        {<Counteritem counterGenerate={counterGenerate} />}
      </div>
    </div>
  );
};

export const App = () => {
  return (
    <>
      <User forstName="Zuhriddin" lastName="Giyosiddinov" link="youtube.com" />
    </>
  );
};

export default App;
