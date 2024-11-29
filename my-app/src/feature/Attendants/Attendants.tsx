import { useEffect, useState } from "react";
import Title from "../../components/Title";
import { AttendantsResponse } from "../../model/attendants";
import "./Attendants.css";
import { getAttendants } from "../../api/attendants";
import AttendantsRow from "../../components/AttendantsRow";

export default function Attendants() {
  const [attendants, setAttendants] = useState<AttendantsResponse[]>([]);

  useEffect(() => {
    getAttendants().then((elems) => {
      console.log(elems);
      setAttendants(elems);
    });
  }, []);

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
          {attendants.map((attendants) => (
            <AttendantsRow {...attendants} key={`${attendants.id}`} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
