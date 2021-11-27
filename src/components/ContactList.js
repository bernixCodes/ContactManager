import React from 'react'
import { Link } from 'react-router-dom'
import ContactCard from './ContactCard'

function ContactList({contacts,removeContact}) {

    
    const deleteContact = (id)=>{
       return removeContact(id)
    }

    const contactList = contacts.map(contact =>{
        return(
         <div className=' d-inline-flex justify-content-around me-3' >
             <div key={contact.id} >
               <ContactCard  contact ={contact} deleteContact={deleteContact}/>
             </div>
        </div>
        )
    })

    return (
             <div className='container'>
                 <h2 className='mt-5'>Contact List 
                 <Link to='/add'>
                 <button type="button" className="btn float-end btn-primary " style={{width:'100px'}} >Add</button>
                 </Link>
                  </h2> 
                 
                 
               {contactList}
             </div>
    )
}

export default ContactList
