import React from "react";

const Form = ({ addData, newName, newNumber, setNewName, setNewNumber }) => {
  return (
    <form onSubmit={addData}>
      <div>
        Name:{" "}
        <input
          type="text"
          className="input"
          value={newName}
          onChange={({ target }) => setNewName(target.value)}
        />
      </div>
      <div>
        Number:{" "}
        <input
          type="number"
          className="input"
          value={newNumber}
          onChange={({ target }) => setNewNumber(target.value)}
        />
      </div>
      <button type="submit" className="add">
        Add Contact
      </button>
    </form>
  );
};

export default Form;
