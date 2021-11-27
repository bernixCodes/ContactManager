import React from 'react'
import user from '../images/girl.jpg';
import { useLocation  } from 'react-router-dom';

function ContactDetail() {
  let location = useLocation();
 let contact = location.state;
    return (
        <div className="card" style={{width: '18rem', display:'flex', justifyContent:'center'}}>
        <img className="card-img-top" src={user} alt=""/>
        <div className="card-body">
          <p className="card-text">Name: {contact.name}  </p>
          <p className="card-text">Email: {contact.email} </p>
          <p className="card-text">Phone: {contact.phone} </p>
        </div>
      </div>
    )
}

export default ContactDetail
