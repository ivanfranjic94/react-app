import React from "react";
import "./Input.css";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
  error?: string;
};

export default function Input({ name, label, error, ...props }: InputProps) {
  return (
    <div className="Field">
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} {...props} /> {/* name parametar je zbog html-a koji ce popuniti form */}
      {error && <span style={{ color: "red" }}>{error}</span>}
    </div>
  );
}
