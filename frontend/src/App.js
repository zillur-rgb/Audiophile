import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import AllContacts from "./Components/AllContacts/AllContacts";
import fetchServices from "./Components/fetchServices/fetchServices";
import Filter from "./Components/Filter/Filter";
import Form from "./Components/Form/Form";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filteredPerson, setFilteredPerson] = useState([]);

  useEffect(() => {
    console.log("effect");
    fetchServices.getAll().then((res) => {
      console.log("Promise fulfilled");
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

    if (persons.find((person) => person.name === newName)) {
      if (
        window.confirm(
          `${newName} is already in the list. Do you want to replace the number?`
        )
      ) {
        console.log(newName);
        const name = persons.find((p) => p.name === newName);
        console.log(name);
        const changedNum = { ...name, number: newNumber };
        console.log(changedNum);

        axios
          .put(`http://localhost:3001/persons/${name.id}`, changedNum)
          .then((res) => {
            setPersons(
              persons.map((person) =>
                person.id !== name.id ? person : res.data
              )
            );
          });
      }
    } else {
      fetchServices.create(newContact).then((res) => {
        setPersons(persons.concat(res.data));
        setFilteredPerson(persons.concat(res.data));
      });
    }
    setNewName("");
    setNewNumber("");
  };

  const deleteContact = (id) => {
    console.log(id);
    if (window.confirm("Are you sure want to delete this contact?")) {
      axios.delete(`http://localhost:3001/persons/${id}`).then((res) => {
        setPersons(persons.filter((person) => person.id !== id));
        setFilteredPerson(persons.filter((person) => person.id !== id));
      });
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

      <div className="contact-block">
        {persons.map((person) => {
          return (
            <AllContacts
              person={person}
              key={person.id}
              deleteContact={() => {
                deleteContact(person.id);
              }}
            />
          );
        })}
      </div>
      <div>debug: {newName}</div>
    </div>
  );
};

export default App;
