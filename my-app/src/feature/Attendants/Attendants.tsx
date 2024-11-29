import { useEffect, useState } from "react";
import Title from "../../components/Title";
import { AttendantsResponse } from "../../model/attendants";
import "./Attendants.css";
import { getAttendants } from "../../api/attendants";
import AttendantsRow from "../../components/AttendantsRow";
import { useErrorBoundary } from "react-error-boundary";

export default function Attendants() {
  const [attendants, setAttendants] = useState<AttendantsResponse[]>([]);
  const { showBoundary } = useErrorBoundary();

  useEffect(() => {
    getAttendants()
      .then((elems) => {
        console.log(elems);
        setAttendants(elems);
      })
      .catch((e) => showBoundary(e));
  }, [showBoundary]);

  return (
    <div>
      <Title title="Attendants" />
      <table>
        <tbody>
          <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>Company</th>
            <th>Email</th>
            <th>Message</th>
            <th>Course</th>
          </tr>
          {attendants.map((attendant) => (
            <AttendantsRow attendant={attendant} key={`${attendant.id}`} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
