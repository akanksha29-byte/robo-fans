import { useEffect, useState } from "react";
import CardItem from "./components/CardItem";
import "./styles.css";

const App = () => {
  const [user, setUser] = useState([]);
  const [search, setSearch] = useState("");

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
      <div className="input-box">
        <input
          value={search}
          id="search"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <CardItem user={user} search={search} />
    </div>
  );
};

export default App;
