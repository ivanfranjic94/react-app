import "./CourseElement.css";
import { useLanguageContext } from "../context/LanguageContext";
import { useNavigate } from "react-router";
interface CourseElementProps {
  id: number;
  src: string;
  type: string;
  title: string;
  duration: number;
}

export default function CourseElement({ id, src, type, title, duration }: CourseElementProps) {
  const context = useLanguageContext();
  const navigate = useNavigate();

  return (
    <div className="CourseElement" onClick={() => navigate(`${id}/apply`)}>
      <img src={src} alt={title} />
      <span className="Type">{type}</span>
      <span>{title}</span>
      <span className="Duration">
        {duration}&nbsp;
        {context.language === "hr" ? "dana" : "days"}
      </span>
    </div>
  );
}
