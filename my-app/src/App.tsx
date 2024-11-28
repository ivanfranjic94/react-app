import "./App.css";
import NavBar from "./components/NavBar";
import CustomButton from "./components/CustomButton";
import LanguageProvider, { useLanguageContext } from "./context/LanguageContext";
import Select from "./components/Select";
import Courses from "./feature/Courses/Courses";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <Navigate to="/courses" />,
      },
      {
        path: "courses",
        element: <Courses />,
      },
    ],
  },
]);

export default function App() {
  return (
    <LanguageProvider>
      <div className="container">
        <NavBar title="CROZ">
          <CustomButton label="Services" />
          <LanguagePicker />
        </NavBar>
        <RouterProvider router={router} />
      </div>
    </LanguageProvider>
  );
}

function LanguagePicker() {
  const { language, setLanguage } = useLanguageContext();

  return (
    <Select
      value={language}
      setValue={setLanguage}
      options={[
        { value: "hr", title: "HR" },
        { value: "en", title: "EN" },
      ]}
    />
  );
}
