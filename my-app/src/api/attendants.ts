import { AttendantsRequest, AttendantsResponse } from "../model/attendants";

export async function applyAttendant(request: AttendantsRequest): Promise<void> {
  //cim je funkcija async vraca Promise tip po defaultu
  const response = await fetch("/api/attendants", {
    method: "POST",
    body: JSON.stringify(request),
    headers: {
      ...HEADERS,
    },
  });

  if (!response.ok) {
    throw new Error("Request ne valja");
  }
}

const HEADERS = {
  "Content-Type": "application/json",
};

export async function getAttendants(): Promise<AttendantsResponse[]> {
  const response = await fetch("/api/attendants");

  if (!response.ok) {
    throw new Error("Ne radi");
  }

  return response.json();
} 