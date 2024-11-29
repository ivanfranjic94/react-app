import { useNavigate, useParams } from "react-router";
import { applyAttendant } from "../../api/attendants";
import CustomButton from "../../components/CustomButton";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import Title from "../../components/Title";
import { useState } from "react";
import { AttendantsRequest } from "../../model/attendants";

export default function Apply() {
  // prvo definicije hookova, konstanti, funkcija pa return
  const params = useParams(); //koristimo jer cemo iz urla citati putanju u kojoj ce biti id coursea, a on treba da bi api prihvatio post request
  const navigate = useNavigate();
  const [errors, setErrors] = useState<Record<keyof AttendantsRequest, string>>();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data: Record<string, unknown> = {};
    formData.forEach((value, name) => {
      data[name] = value;
    });

    const formErrors = {};
    if (!data.firstName) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      formErrors.firstName = "Fali first name";
    }
    if (!data.lastName) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      formErrors.lastName = "Fali last name";
    }
    if (Object.keys(formErrors).length > 0) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setErrors(formErrors);
      return;
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    applyAttendant({ ...data, courseId: params.id! }) //   ! jer znam da ce to biti popunjeno
      .then(() => navigate("/courses"));
    //.catch;
  };
  return (
    <div>
      <Title title="Apply to courses" />
      <form onSubmit={onSubmit}>
        <Input name="firstName" label="First name" error={errors?.firstName} /> {/* moze se dodati required true*/}
        <Input name="lastName" label="Last name" error={errors?.lastName} />
        <Input name="email" label="Email" />
        <Input name="company" label="Company" />
        <TextArea name="message" label="Message" />
        <CustomButton label="Submit" />
      </form>
    </div>
  );
}
