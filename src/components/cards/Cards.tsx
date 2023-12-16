import { useQuery, useMutation } from "react-query";
import axios from "axios";
import styles from "./Cards.module.css";

const fetchData = async () => {
  const response = await axios.get("http://localhost:3001/users");
  return response.data.users;
};

const deleteUser = async (userId) => {
  await axios.delete(`http://localhost:3001/users/${userId}`);
  console.log(userId)
};

const Cards = () => {
  const { data: getData, refetch } = useQuery("users", fetchData);

  const mutation = useMutation(deleteUser, {
    onSuccess: () => {
      refetch();
    },
  });

  const handleDelete = (userId) => {
    mutation.mutate(userId);
  };

  return (
    <div className={styles.wrapper}>
      {getData &&
        getData.map((user, index) => (
          <div key={index} className={styles.cardWrapper}>
            <div className={styles.picture_wrapper}>
              <img
                src="https://picsum.photos/200"
                alt="alternatetext"
                className={styles.picture}
              ></img>
            </div>

            <h3 className={styles.card_head}>{user.name}</h3>
            <div className={styles.card_about}>
              <li>Age: {user.age}</li>
              <li>Hobbies: {user.hobbies}</li>
              <li>Job: {user.job}</li>
            </div>

            <div className={styles.btnWrapper}>
              <button onClick={() => handleDelete(user.id)}>Delete</button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Cards;