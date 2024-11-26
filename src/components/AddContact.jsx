import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // useLocation to redirect page in a programatic way after submit

function AddContact(props) {
    const [contact, setContact] = useState({
        name: "",
        email: ""
    })

    const location = useLocation();

    function add(e) {
        e.preventDefault()
        if (contact.name === "" || contact.email === "") {
            alert("All fields are mandatory")
            return
        }
        props.addContactHandler(contact)
        setContact({
            name: "",
            email: ""
        })
        // console.log(location)
        // following line redirects to the mentioned url
        location.pathname = "/"
    }
    return (
        <div className="container mt-4">
            <div className="border rounded p-4">
                <h2>Add Contact</h2>
                <form onSubmit={(e) => add(e)}>
                    <div className="mb-3">
                        <label htmlFor="inputName" className="form-label">Name</label>
                        <input type="text" className="form-control" id="inputName" value={contact.name} onChange={(e) => setContact({ ...contact, name: e.target.value })} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputEmail" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="inputEmail" value={contact.email} onChange={(e) => setContact({ ...contact, email: e.target.value })} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AddContact