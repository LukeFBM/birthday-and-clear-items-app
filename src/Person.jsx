import React from "react";

const Person = ({ image, name, age }) => {
  return (
    <div className="person">
      <img src={image} alt={name} className="img" />
      <div>
        <h2>{name}</h2>
        <p>{age} years</p>
      </div>
    </div>
  );
};

export default Person;
