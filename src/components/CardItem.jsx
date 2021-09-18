import React from "react";
import Card from "./Card";

const CardItem = ({ user, search }) => {
  if (search !== "") {
    user = user.filter((data) =>
      data.username.toLowerCase().includes(search.toLowerCase())
    );
  }
  return (
    <div className="card-container">
      {user.map((data) => {
        return <Card key={data.id} data={data} />;
      })}
    </div>
  );
};

export default CardItem;
