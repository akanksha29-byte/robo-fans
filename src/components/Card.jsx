import React from "react";

const Card = ({ data }) => {
  return (
    <div className="card">
      <img src={`https://robohash.org/${data.id}?200x200`} alt={data.name} />
      <h3>{data.username}</h3>
      <p>{data.email}</p>
    </div>
  );
};

export default Card;
