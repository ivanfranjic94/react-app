import Title from "./components/Title";
import "./App.css";
import CourseElement from "./components/CourseElement";
import { data } from "./constants/data";
import NavBar from "./components/NavBar";
import CustomButton from "./components/CustomButton";
import LanguageProvider from "./context/LanguageContext";

export default function App() {
  const title = "Education";
  return (
    <LanguageProvider>
      <div className="container">
        <NavBar title="CROZ">
          <CustomButton label="Services" />
        </NavBar>
        <div className="App">
          <Title title={title} />
          <div className="Courses">
            {data.map((course) => (
              <CourseElement {...course} key={course.id} />
            ))}
          </div>
        </div>
      </div>
    </LanguageProvider>
  );
}
