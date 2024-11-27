import { useState } from "react";
import "./App.css";

export default function App() {
  const title = "Education";
  return (
    <div className="container">
      <Title title={title} />
      <span>Continuous education is one of the crucial factors for success.</span>
      <Counter />
    </div>
  );
}

interface TitleProps {
  title: string;
}

function Title({ title }: TitleProps) {
  return <span style={{ fontSize: 20 }}>{title}</span>;
}

function Counter() {
  const [counter, setCounter] = useState(0);

  const onClick = () => {
    setCounter((oldCounter) => oldCounter + 1);
  };

  return <button onClick={onClick}>Kliknut {counter} puta</button>;
}
