import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((res) => {
        setJokes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <>
      <h1>Full Stack WEB Developer </h1>
      <p>JOKES:{jokes.length}</p>
      {
      jokes.map((joke) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))
      }
    </>
  );
};

export default App;
