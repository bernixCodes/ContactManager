import React,{useState,useEffect} from 'react';
import './App.css';
import Header from './components/Header/Header';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';

function App() {
  const [contacts, setContacts] = useState([])
   const newContactDetail =(contact)=>{
      setContacts([...contacts,contact])
   }
   useEffect(() => {
    
    // Get saved data from localStorage
     const retrievedContacts = localStorage.getItem('contacts') ? JSON.parse(localStorage.getItem('contacts')) : [];
     setContacts(retrievedContacts)
   }, []);
   useEffect(() => {
    
    // Save data to localStorage
    localStorage.setItem('contacts', JSON.stringify(contacts));

  }, [contacts]);
 
 
  return (
    <div className='container-fluid'>
      <Header/>
      <AddContact newContactDetail = {newContactDetail}/>
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
