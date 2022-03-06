import React from "react";
import "./AllContacts.css";

const AllContacts = ({ person, deleteContact }) => {
  return (
    <div>
      {
        <div className="contact" key={person.id}>
          <h4 className="name-text">{person.name}</h4>
          <p>{person.number}</p>
          <button
            style={{
              backgroundColor: "red",
              padding: "5px 10px",
              cursor: "pointer",
            }}
            onClick={deleteContact}
          >
            Delete Contact
          </button>
        </div>
      }
    </div>
  );
};

export default AllContacts;
