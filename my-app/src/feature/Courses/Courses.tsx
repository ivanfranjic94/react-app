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
    /* fetch("/api/courses") // bolje rjesenje je izdvojiti to u metodu "src/api/courses.ts" koja se kasnije moze reusati 
    .then(response => response.json()) // te kreirati model (interface) "src/model/courses.ts" koji definira polja
    .then(courses => setCourses(courses)) */
    getCourses().then((courses) => setCourses(courses));
  }, []);

  return (
    <div className="App">
      <Title title={title} />
      <div className="Courses">
        {courses.map(
          (
            course //(courses || []).map((course) jedno od rijesenja, ali bolje tako da se state inicijalizira na []
          ) => (
            <CourseElement {...course} key={course.id} />
          )
        )}
      </div>
    </div>
  );
}
