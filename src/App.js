import { useEffect, useState } from "react";
import CardItem from "./components/CardItem";
import "./styles.css";

const App = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const result = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      ).then((data) => data.json());
      setUser([...result]);
    };
    fetchApi();
  }, []);
  return (
    <div className="App">
      <CardItem user={user} />
    </div>
  );
};

export default App;
