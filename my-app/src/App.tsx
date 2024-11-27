import Title from "./components/Title";
import Counter from "./components/Counter";
import "./App.css";
import CustomButton from "./components/CustomButton";

export default function App() {
  const title = "Education";
  return (
    <div className="container">
      <Title title={title} />
      <span>Continuous education is one of the crucial factors for success.</span>
      <Counter />
      <CustomButton label="CustButton" />
    </div>
  );
}
