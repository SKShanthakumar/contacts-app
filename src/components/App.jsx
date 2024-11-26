import React, { useEffect, useState } from 'react'
import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContactList'
import ContactDetail from './ContactDetail'
import { v4 as uuid } from 'uuid'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  const localStorageKey = 'contacts'
  const [contacts, setContacts] = useState([])

  function addContactHandler(contact) {
    setContacts([...contacts, { id: uuid(), ...contact }])
  }

  function removeContactHandler(id) {
    const removedContact = contacts.filter((contact) => contact.id !== id)
    setContacts(removedContact)
  }

  useEffect(() => {
    const retrieve = JSON.parse(localStorage.getItem(localStorageKey))
    if (retrieve) setContacts(retrieve)
  }, [])

  useEffect(() => {
    if (contacts.length > 0) localStorage.setItem(localStorageKey, JSON.stringify(contacts))
  }, [contacts])

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ContactList contacts={contacts} passId={removeContactHandler} />} />
          <Route path="/add" element={<AddContact addContactHandler={addContactHandler} />} />
          <Route path="/contact/:id" element={<ContactDetail />} />
        </Routes>
      </Router>
    </>
  )
}

export default App