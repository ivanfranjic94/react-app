import "./CustomButton.css";
interface CustomButtonProps {
  label: string;
  onClick?: () => void;
}

export default function CustomButton({ label, onClick }: CustomButtonProps) {
  return (
    <button className="custom-button" onClick={onClick}>
      {label}
    </button>
  );
}
