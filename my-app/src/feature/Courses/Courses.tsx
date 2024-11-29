import { useEffect, useState } from "react";
import CourseElement from "../../components/CourseElement";
import Title from "../../components/Title";
import "./Courses.css";
import { getCourses } from "../../api/courses";
import { Course as CourseResponse } from "../../model/courses";

export default function Courses() {
  const title = "Education";
  const [courses, setCourses] = useState<CourseResponse[]>([]);

  useEffect(() => {
    getCourses().then((courses) => setCourses(courses));
  }, []);

  return (
    <div className="App">
      <Title title={title} />
      <div className="Courses">
        {courses.map(
          (
            course //(courses || []).map((course) ovo je rijeseno tako da se state inicijalizirao na []
          ) => (
            <CourseElement {...course} key={course.id} />
          )
        )}
      </div>
    </div>
  );
}
