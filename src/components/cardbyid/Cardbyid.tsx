import { useParams } from "react-router-dom";
import axios from "axios";
import { useQuery } from "react-query";

const Cardbyid = () => {
  const { id } = useParams();

  const dati = async () => {
    const response = await axios.get(`http://localhost:3001/users/${id}`);
    return response.data;
  };

  const { data: users } = useQuery(["user", id], dati);
  console.log({ users });

  return (
    <div>
      <div key={id}>
        <h1>{id}</h1>
      </div>
    </div>
  );
};

export default Cardbyid;
