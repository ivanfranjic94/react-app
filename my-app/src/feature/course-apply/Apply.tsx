import { useNavigate, useParams } from "react-router";
import { applyAttendant } from "../../api/attendants";
import CustomButton from "../../components/CustomButton";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import Title from "../../components/Title";

export default function Apply() {
  const params = useParams(); //koristimo jer cemo iz urla citati putanju u kojoj ce biti id coursea, a on treba da bi api prihvatio post request
  const navigate = useNavigate();
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data: Record<string, unknown> = {};
    formData.forEach((value, name) => {
      data[name] = value;
    });

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    applyAttendant({ ...data, courseId: params.id! }) //! jer znam da ce to biti popunjeno
      .then(() => navigate("/courses"));
      //.catch;
  };
  return (
    <div>
      <Title title="Apply to courses" />
      <form onSubmit={onSubmit}>
        <Input name="firstName" label="First name" required={true} />
        <Input name="lastName" label="Last name" />
        <Input name="email" label="Email" />
        <Input name="company" label="Company" />
        <TextArea name="message" label="Message" />
        <CustomButton label="Submit" />
      </form>
    </div>
  );
}
