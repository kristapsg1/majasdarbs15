import styles from "./Add.module.css";
import { useState } from "react";
import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

const initFormValue = {
  name: "",
  age: "",
  hobbies: "",
  job: "",
};

type cardType = typeof initFormValue;

const Add = () => {
  const queryClient = useQueryClient();

  const addMutation = useMutation((formData) =>
    axios.post("http://localhost:3001/users", formData)
  );

  const [formValue, setFormValue] = useState<cardType>(initFormValue);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addMutation.mutateAsync(formValue);
    queryClient.invalidateQueries("users");
    setFormValue(initFormValue);

  };



  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          id="name"
          value={formValue.name}
          onChange={(e) => {
            setFormValue({ ...formValue, name: e.target.value });
          }}
        />
        <input
          type="number"
          placeholder="Age"
          id="age"
          value={formValue.age}
          onChange={(e) => {
            setFormValue({ ...formValue, age: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="Hobbies"
          id="hobbies"
          value={formValue.hobbies}
          onChange={(e) => {
            setFormValue({ ...formValue, hobbies: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="Job"
          id="job"
          value={formValue.job}
          onChange={(e) => {
            setFormValue({ ...formValue, job: e.target.value });
          }}
        />
        <button type="submit" disabled={addMutation.isLoading}>
          {addMutation.isLoading ? "Adding..." : "Add"}
        </button>
      </form>
    </div>
  );
};

export default Add;
