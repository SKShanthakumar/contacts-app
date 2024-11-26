import React from "react"
import { Link } from "react-router-dom"

function ContactList(props) {
    const renderContact = props.contacts.map((contact) => {
        return (
            <li key={contact.id} className="list-group-item d-flex justify-content-between pb-0 pt-3">
                <Link to={`/contact/${contact.id}`} state={{data: contact}} className="text-decoration-none text-reset">
                <div className="d-flex align-items-center">                  
                    <i className='bx bxs-user-circle position-relative' style={{ fontSize: "40px", bottom: "10%" }}></i>
                    <div className="ps-3">
                            <h6>{contact.name}</h6>
                            <p>{contact.email}</p>                       
                    </div>
                </div>
                </Link>
                <button className="btn btn-link text-danger"><i className='bx bx-trash position-relative' style={{ fontSize: "22px", bottom: "10%" }} onClick={() => { props.passId(contact.id) }} ></i></button>
            </li>
        )
    })
    return (
        <div className="container mt-4">
            <ul className="list-group">
                <li className="list-group-item py-3 d-flex justify-content-between">
                    <h2>Contact List</h2>
                    <Link to="/add">
                        <button className="btn btn-primary">Add Contact</button>
                    </Link>
                </li>
                {renderContact}
            </ul>
        </div>
    )
}

export default ContactList