import React from 'react'
// import { Link } from 'react-router-dom';
import { useNavigate  } from 'react-router-dom';

import user from '../images/user.png';
import DeleteIcon from '@material-ui/icons/Delete';

function ContactCard(props) {
    const {id,name,email,phone} = props.contact;
    let navigate = useNavigate();

    const showDetails = ()=>{
        navigate(`/contact/${id}`, { state: props.contact });
    }

    return (
    <div className="card" style={{width:'18rem', marginTop:'10px', cursor:'pointer'}}>
        <img className="card-img-top" src={user} alt='' style={{width:'60px',display:'flex', justifyContent: 'center', alignSelf:'center'}}/>
        <div className="card-body"  onClick={showDetails} >
            <h5 className="card-title" style={{textAlign:'center'}}>{name}</h5>
            <p className="card-text">
                <span className='font-weight-bold'>Phone Number: </span> {phone}
            </p>
            <p className="card-text">
                <span className='font-weight-bold'>Email Address: </span> {email}
            </p>
            {/* <i className="far fa-trash-alt"  ></i> */}
       </div>
       <DeleteIcon onClick={() =>props.deleteContact(id)}  style={{ color: 'red'}}/>

   </div>
    )
}

export default ContactCard
