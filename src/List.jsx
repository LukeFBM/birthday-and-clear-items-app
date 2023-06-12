import React from "react";
import Person from "./Person";

const List = ({ people }) => {
  return (
    <section>
      {people.map((person) => {
        return (
          <div>
            <Person person={person} {...person} />
          </div>
        );
      })}
    </section>
  );
};
export default List;
