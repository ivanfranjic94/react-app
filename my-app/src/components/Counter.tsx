import { useState } from "react";
import CustomButton from "./CustomButton";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  const onClick = () => {
    setCounter((oldCounter) => oldCounter + 1);
  };

  return <CustomButton label={`Kliknut ${counter} puta`} onClick={onClick} />;
  //return (
  // <button onClick={onClick} onContextMenu={onContextMenu}>
  //  Kliknut {counter} puta
  //</button>
  //);
}
