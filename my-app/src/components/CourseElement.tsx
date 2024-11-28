import "./CourseElement.css";
import { useLanguageContext } from "../context/LanguageContext";
interface CourseElementProps {
  src: string;
  type: string;
  title: string;
  duration: number;
}

export default function CourseElement({ src, type, title, duration }: CourseElementProps) {
  const context = useLanguageContext();
  console.log(context);
  return (
    <div className="CourseElement">
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
