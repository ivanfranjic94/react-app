import "./CourseElement.css";
interface CourseElementProps {
  src: string;
  type: string;
  title: string;
  duration: number;
}

export default function CourseElement({ src, type, title, duration }: CourseElementProps) {
  return (
    <div className="CourseElement">
      <img src={src} alt={title} />
      <span className="Type">{type}</span>
      <span>{title}</span>
      <span className="Duration">{duration} days</span>
    </div>
  );
}
