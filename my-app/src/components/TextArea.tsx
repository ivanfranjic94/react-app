import React from "react";
import "./TextArea.css";

type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  name: string;
  label: string;
};

export default function TextArea({ name, label }: TextAreaProps) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <textarea name={name} id={name}></textarea>
    </div>
  );
}
