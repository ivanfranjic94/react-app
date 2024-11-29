import { AttendantsResponse } from "../model/attendants";

interface AttendantRowProps {
  attendant: AttendantsResponse;
}
export default function AttendantsRow({ attendant }: AttendantRowProps) {
  //
  return (
    <tr>
      <td>{attendant.firstName}</td>
      <td>{attendant.lastName}</td>
      <td>{attendant.company}</td>
      <td>{attendant.email}</td>
      <td>{attendant.message}</td>
      <td>{attendant.course.title}</td>
    </tr>
  );
}
