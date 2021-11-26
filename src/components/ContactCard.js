import React from 'react'
import user from '../images/user.png';

function ContactCard({contact}) {
    return (
    <div className="card" style={{width:'18rem', marginTop:'10px'}}>
        <img class="card-img-top" src={user}  style={{width:'60px',display:'flex', justifyContent: 'center', alignSelf:'center'}}/>
        <div className="card-body">
            <h5 className="card-title" style={{textAlign:'center'}}>{contact.name}</h5>
            <p className="card-text">
                <span className='font-weight-bold'>Phone Number: </span> {contact.phone}
            </p>
            <p class="card-text">
                <span className='font-weight-bold'>Email Address: </span> {contact.email}
            </p>
            <i className="far fa-trash-alt" style={{display: 'flex', justifyContent:'flex-end', color: 'red'}}></i>
       </div>
   </div>
    )
}

export default ContactCard
