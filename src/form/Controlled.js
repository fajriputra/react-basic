import React from "react";
import useForm from "../hooks/useForm";
import {
  InputText,
  InputCheck,
  InputRadio,
  InputArea,
  InputSelect,
} from "./index";

const Controlled = () => {
  const { form, handleChange } = useForm({
    name: "",
    member: false,
    gender: 0,
    comment: "",
    category: "Belum dipilih",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      `
      name: ${form.name},
      member: ${form.member === false ? "Bukan Member" : "Member"},
      gender: ${form.gender === 0 ? "Female" : "Male"},
      comment: ${form.comment},
      category: ${form.category}`
    );
    window.location.reload();
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ textAlign: "center", marginTop: "10vh" }}
    >
      <InputText
        label="Name"
        name="name"
        value={form.name}
        onChange={handleChange}
      />{" "}
      <br />
      <InputCheck
        label="Member"
        name="member"
        checked={form.member}
        onChange={handleChange}
      />
      <br />
      <InputRadio
        label="Gender"
        name="gender"
        checked={form.gender}
        onChange={handleChange}
      />
      <br />
      <InputArea
        label="Comment"
        name="comment"
        value={form.text}
        onChange={handleChange}
      />
      <br />
      <InputSelect
        label="Category"
        name="category"
        value={form.category}
        onChange={handleChange}
      />
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Controlled;
