import React from 'react'
import ContactCard from './ContactCard'

function ContactList({contacts}) {

    const contactList = contacts.map(contact =>{
        return(
         <div className=' d-inline-flex justify-content-around me-3' >
             <div className='col-md-auto' >
               <ContactCard key={contact.name} contact ={contact}/>
             </div>
        </div>
        )
    })
    return (
             <div className='container'>
               {contactList}
             </div>
    )
}

export default ContactList
