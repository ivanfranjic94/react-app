import CustomButton from "../../components/CustomButton";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import Title from "../../components/Title";

export default function Apply() {
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {};
    formData.forEach((value, name) => {
      data[name] = value;
    });
    console.log(data);
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
