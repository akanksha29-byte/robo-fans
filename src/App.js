import { useEffect, useState } from "react";
import CardItem from "./components/CardItem";
import Modal from "./components/Modal";
import "./styles.css";

const App = () => {
  const [user, setUser] = useState([]);
  const [search, setSearch] = useState("");
  const [popUp, setPopUp] = useState(false);

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
      <div className="form">
        <button id="pop-up" onClick={(e) => setPopUp(true)}>
          Pop up
        </button>

        <div className="input-box">
          <input
            value={search}
            id="search"
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <CardItem user={user} search={search} />
      {popUp ? <Modal setPopUp={setPopUp} /> : ""}
      {console.log(popUp)}
    </div>
  );
};

export default App;
