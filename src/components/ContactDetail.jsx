import React from "react"
import { Link, useLocation } from "react-router-dom"
import avatar from "../images/avatar.png"

function ContactDetail(props) {
    const location = useLocation()
    const contact = location.state.data
    return (
        <div className="container mt-5">
            <div className="col-3 mx-auto">
                <div className="card text-center">
                    <img src={avatar} className="mx-auto" style={{ width: "70%" }} />
                    <div className="card-body">
                        <strong>{contact.name}</strong>
                        <p className="card-text">{contact.email}</p>
                    </div>
                </div>
            </div>
            <div className="text-center mt-4">
                <Link to="/">
                    <button className="btn btn-primary">Back to Contact List</button>
                </Link>
            </div>
        </div>
    )
}

export default ContactDetail