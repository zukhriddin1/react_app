import { useEffect, useState } from "react";

const Counteritem = ({ counterGenerate }) => {
  const [item, setItem] = useState([]);
  useEffect(() => {
    const newItem = counterGenerate();
    setItem(newItem);
    console.log("Render");
  }, [counterGenerate]);

  return (
    <ul>
      {item.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default Counteritem;
