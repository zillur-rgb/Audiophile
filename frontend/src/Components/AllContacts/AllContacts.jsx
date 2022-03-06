import React from "react";

const AllContacts = ({ persons }) => {
  return (
    <div className="contact-block">
      {persons.map((person) => {
        return (
          <div className="contact" key={person.number}>
            <h4 className="name-text">{person.name}</h4>
            <p>{person.number}</p>
          </div>
        );
      })}
    </div>
  );
};

export default AllContacts;
