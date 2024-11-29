//nekoristeno
import { useParams } from "react-router";

export default function CourseDetails() {
  const params = useParams();
  return <div>{params.id}</div>;
}
