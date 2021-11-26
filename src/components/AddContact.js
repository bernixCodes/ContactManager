import React,{useState} from 'react'

function AddContact(props) {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleName = (e)=>{
        setName(e.target.value)
    }

    const handleNumber = (e)=>{
        setPhone(e.target.value)
    }

    const handleEmail = (e)=>{
        setEmail(e.target.value)
    }
    const addContact = (e)=>{
        e.preventDefault();
        if(!name || !phone || !email){
            alert('Heyyy!! all fields are required')
            return
        }
        let payload ={
            name: name,
            phone: phone,
            email:email
        }
         props.newContactDetail(payload);
         setName('')
         setPhone('')
         setEmail('')
       
    }


    return (
        <div className='container'>
            <h2 className='mt-3 mb-2'>Add Contact</h2>
              <form onSubmit={addContact}>
                <div className="mb-3">
                    <label for="name" className="form-label">Name</label>
                    <input type="text" value={name} className="form-control" id="name"  onChange={handleName}/> 
                </div>
                <div className="mb-3">
                    <label for="contact" className="form-label">Phone Number</label>
                    <input type="number" value={phone} className="form-control" id="contact"  onChange={handleNumber}/>
                </div>
                <div className="mb-3">
                    <label for="email" className="form-label">Email Address</label>
                    <input type="email" value={email} className="form-control" id="email" onChange={handleEmail} />
                </div>
                <button type="submit" className="btn btn-primary">Add</button>
              </form>
        </div>
    )
}

export default AddContact
