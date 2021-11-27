import React,{useState} from 'react'
import { useNavigate  } from 'react-router-dom';

function AddContact(props) {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [successAlert, setSuccessAlert] = useState('');
    const [dangerAlert, setDangerAlert] = useState('');
    const navigate = useNavigate();

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
            setDangerAlert('All fields are required')
            return
        }
        let payload ={
            name: name,
            phone: phone,
            email:email
        }
         setSuccessAlert('Successfully added a contact')
         props.newContactDetail(payload);
         setName('')
         setPhone('')
         setEmail('')
         setTimeout(()=>{
             navigate('/')
         }, 3000)

         ;
       
    }


    return (
        <div className='container'>
            {
               dangerAlert&&(
                <div className="alert alert-danger alert-dismissible fade show " role="alert">
                <span >{dangerAlert}
                <span type="button" className="close float-end" data-bs-dismiss="alert"  aria-label="Close"aria-hidden="true">&times;</span>
                
                </span>
              </div>
               )

            }

            {
                successAlert &&(
                    <div className="alert alert-success alert-dismissible fade show " role="alert">
                       <span> {successAlert}
                       <span type="button" className="close float-end" data-bs-dismiss="alert" aria-label="Close"aria-hidden="true">&times;</span>

                       </span>
                   </div>
                )
            }
           

                 
            <h2 className='mt-3 mb-2'>Add Contact</h2>
              <form onSubmit={addContact}>
                <div className="mb-3">
                    <label  className="form-label">Name</label>
                    <input type="text" value={name} className="form-control" id="name"  onChange={handleName}/> 
                </div>
                <div className="mb-3">
                    <label  className="form-label">Phone Number</label>
                    <input type="number" value={phone} className="form-control" id="contact"  onChange={handleNumber}/>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Email Address</label>
                    <input type="email" value={email} className="form-control" id="email" onChange={handleEmail} />
                </div>
                
                <button type="submit" className="btn btn-primary">Add</button>
              </form>
        </div>
    )
}

export default AddContact
