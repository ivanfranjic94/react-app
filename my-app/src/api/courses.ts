import { Course } from "../model/courses";

export async function getCourses(): Promise<Course[]> {
  /**
   * fetch("/api/courses") 
    .then(response => response.json())
    ...
    problem kod ovog rjesenja je da bi se return izvrsio mozda i prije nego svi fetch/then
    zbog toga se doda await na fetch da se prvo odradi on, zatim provjera responsea i tek onda 
    se vraća response kao promise
   */
  const response = await fetch("/api/courses");

  if (!response.ok) {
    throw new Error("Ne radi");
  }

  return response.json();
}
