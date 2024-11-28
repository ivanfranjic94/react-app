import { ChangeEvent } from "react";
import "./Select.css";

interface SelectProps {
  value: string;
  setValue: (value: string) => void;
  options: { value: string; title: string }[];
}

export default function Select({ value, setValue, options }: SelectProps) {
  const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
  };

  return (
    <select value={value} onChange={onChange}>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.title}
        </option>
      ))}
    </select>
  );
}
