import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import AllContacts from "./Components/AllContacts/AllContacts";
import Filter from "./Components/Filter/Filter";
import Form from "./Components/Form/Form";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filteredPerson, setFilteredPerson] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((res) => {
      setPersons(res.data);
      setFilteredPerson(res.data);
    });
  }, []);

  const addData = (event) => {
    event.preventDefault();
    const newContact = {
      name: newName,
      number: newNumber,
    };

    const alreadyExist = persons.find((person) => person.name === newName);

    if (alreadyExist) {
      alert(`${newName} is already in the list`);
      setNewName("");
      setNewNumber("");
    } else {
      setPersons(persons.concat(newContact));
      setFilteredPerson(persons.concat(newContact));

      setNewName("");
      setNewNumber("");
    }
  };

  const handleSearch = (event) => {
    let value = event.target.value.toLowerCase();
    let result = [];
    result = filteredPerson.filter(
      (person) => person.name.toLowerCase().search(value) !== -1
    );
    setPersons(result);
  };

  // const filteredPersons = persons.filter((person) =>
  //   searchValue === "" ? person : person.name.includes(searchValue)
  // );

  return (
    <div className="App">
      <div className="app-header">
        <h2>Phonebook</h2>
      </div>

      <Form
        addData={addData}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
      />
      <h2>My Contacts</h2>
      <Filter handleSearch={handleSearch} />

      <AllContacts persons={persons} />
      <div>debug: {newName}</div>
    </div>
  );
};

export default App;
