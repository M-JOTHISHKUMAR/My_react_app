import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Row,InputGroup } from 'react-bootstrap';
import Login from './Login';
import './Login.css';
import axios from 'axios';

function Forms() {
    const[Username,setUsername]=useState('')
    const[Email,setEmail]=useState('')
    const[Mobile,setMobile]=useState('')
    const[Password,setPassword]=useState('')
    const[ConfirmPassword,setConfirmPassword]=useState('')
    const[Error,setError]=useState(false)

    // let navigate = useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(Username.length===0||Email.length===0){
            setError(true);
        }
        if(Mobile.length!==10){
            setError(true);
        }
        if(Password!==ConfirmPassword){
            setError(true);
        }
        if(Username&&Email){
          console.log(Username,Email,Mobile,Password,ConfirmPassword,Error);
        }
    const data={
        name:Username,
        email:Email,
        mobilenumber:Mobile,
        password:Password,
        confirm_password:ConfirmPassword
    };
    axios.post("http://127.0.0.1:8080/addDetails",data);
}

  return (
    <div class="Registration">
    <Form className="form" onSubmit={handleSubmit} >
        <div>
        <Form.Group controlId="formGridlabel" id="reg-head" className="col col-sm-20"><h3>Register Here</h3></Form.Group>
        <br/>
        <div class="users">
				
		      		<span class="fa fa-user-o"></span>
		      	</div>
        <Row className="mb-3">
        <Form.Group controlId="formBasicEmail" className="col col-sm-10">
            <Form.Label className='input'>Username</Form.Label>
            <Form.Control placeholder='UserName' onChange={e=>setUsername(e.target.value)}/>
        {Error && Username.length<=0?
        <Form.Label className='error'>UserName can't be Empty </Form.Label>:""}
            </Form.Group>   
    </Row>
        <Row className="mb-3">
        <Form.Group controlId="formBasicEmail" className="col col-sm-10">
            <Form.Label className='input'>Email</Form.Label>
            <InputGroup>
        <Form.Control placeholder='Email' onChange={e=>setEmail(e.target.value)} /><InputGroup.Text id="basic-addon2">@gmail.com</InputGroup.Text>
            </InputGroup>
        {Error && Email.length<=0?
        <label className='error'>Email can't be Empty </label>:""}
            </Form.Group>
        </Row>
        
        <Row className="mb-3">
        <Form.Group controlId="formBasicMobile" className="col col-sm-10">
            <Form.Label className='input'>Mobile Number</Form.Label>
            <InputGroup>
    
            <Form.Control placeholder='Mobile Number' onChange={(e)=>setMobile(e.target.value)}/>
            </InputGroup>        </Form.Group>
        </Row>
        <Form.Label className='input'>Password</Form.Label>
        <Row className="mb-3">
        <Form.Group controlId="formBasicEmail" className="col col-sm-10">
            <Form.Control placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
        </Form.Group>
        </Row>
        
        <Row className="mb-3">
        <Form.Group controlId="formBasicEmail" className="col col-sm-10">
            <Form.Label className='input'>Confirm Password</Form.Label>
            <Form.Control placeholder='Re-Enter Password' onChange={(e)=>setConfirmPassword(e.target.value)}/>
        </Form.Group>
        </Row>
        <center><button id="button" className="me-1 btn btn btn-lg" onSubmit={<Login/>}>Submit</button></center>
           </div>
         <center><button id="button" className="me-1 btn btn btn-lg" onSubmit={<Login/>}> <Link to="/login"> Already have an account?login here.</Link></button></center>
     </Form>
     
 
      <br/>
      <br/>
      <br/>
     </div>
  )
}

export default Forms;