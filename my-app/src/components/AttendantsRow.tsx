import { AttendantsResponse } from "../model/attendants";

export default function AttendantsRow({ firstName, lastName, company, email, message, course }: AttendantsResponse) {
  return (
    <tr>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{company}</td>
      <td>{email}</td>
      <td>{message}</td>
      <td>{course.title}</td>
    </tr>
  );
}
