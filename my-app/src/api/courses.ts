import { Course } from "../model/courses";

export async function getCourses(): Promise<Course[]> {
  const response = await fetch("/api/courses");

  if (!response.ok) {
    throw new Error("Ne radi");
  }

  return response.json();
}
