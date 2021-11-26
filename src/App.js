import React,{useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';

function App() {
  const [contacts, setContacts] = useState([])
   const newContactDetail =(contact)=>{
      setContacts([...contacts,contact])
   }
 
  return (
    <div className='container-fluid'>
      <Header/>
      <AddContact newContactDetail = {newContactDetail}/>
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
