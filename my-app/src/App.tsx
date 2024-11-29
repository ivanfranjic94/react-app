import "./App.css";
import NavBar from "./components/NavBar";
import CustomButton from "./components/CustomButton";
import LanguageProvider, { useLanguageContext } from "./context/LanguageContext";
import Select from "./components/Select";
import Courses from "./feature/Courses/Courses";
import { createBrowserRouter, Link, Navigate, Outlet, RouterProvider } from "react-router";
import Apply from "./feature/course-apply/Apply";
import Attendants from "./feature/Attendants/Attendants";
import { ErrorBoundary } from "react-error-boundary";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppContainer />,
    errorElement: <span>Greska u ruti</span>,
    children: [
      {
        index: true,
        element: <Navigate to="/courses" />,
      },
      {
        path: "courses",
        children: [
          {
            index: true,
            element: <Courses />,
          },
          {
            path: ":id/apply",
            element: <Apply />,
          },
        ],
      },
      {
        path: "attendants",
        element: <Attendants />,
        errorElement: <span>Greska u polaznicima</span>,
      },
    ],
  },
]);

export default function App() {
  return (
    <ErrorBoundary fallback={<span>Greska u renderiranju</span>}>
      {" "}
      {/* Testirati tako da se baci error u npr languageprovider */}
      <LanguageProvider>
        <RouterProvider router={router} />
      </LanguageProvider>
    </ErrorBoundary>
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

function AppContainer() {
  return (
    <div className="container">
      <NavBar title="CROZ">
        <Link to="/courses">Courses</Link>
        <Link to="/attendants">Attendants</Link>
        <CustomButton label="Services" />
        <LanguagePicker />
      </NavBar>
      <Outlet />
    </div>
  );
}
