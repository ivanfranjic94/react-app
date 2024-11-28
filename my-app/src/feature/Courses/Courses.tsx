import CourseElement from "../../components/CourseElement";
import Title from "../../components/Title";
import { data } from "../../constants/data";
import "./Courses.css";

export default function Courses() {
  const title = "Education";
  return (
    <div className="App">
      <Title title={title} />
      <div className="Courses">
        {data.map((course) => (
          <CourseElement {...course} key={course.id} />
        ))}
      </div>
    </div>
  );
}
