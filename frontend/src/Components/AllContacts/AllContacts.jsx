import React from "react";
import "./AllContacts.css";

const AllContacts = ({ person, deleteContact }) => {
  return (
    <div>
      {
        <div
          className="contact"
          style={{ position: "relative" }}
          key={person.id}
        >
          <button
            style={{
              backgroundColor: "red",
              padding: "5px 10px",
              cursor: "pointer",
              position: "absolute",
              right: "0",
              top: "0",
            }}
            onClick={deleteContact}
          >
            x
          </button>
          <h4 className="name-text">{person.name}</h4>
          <p>{person.number}</p>
        </div>
      }
    </div>
  );
};

export default AllContacts;
