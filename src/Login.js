import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Row,InputGroup } from 'react-bootstrap';
// import './Form.css';
import axios from 'axios';
// import  user from "./assets/user.jpg"

function Login() {
    const[Username,setUsername]=useState('')
    const[Email,setEmail]=useState('')
    const[Password,setPassword]=useState('')
    const[Error,setError]=useState(false)

    // let navigate = useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(Username.length===0||Email.length===0){
            setError(true);
        }
        
        if(Username&&Email){
          console.log(Username,Email,Password,Error);
        }
    const data={
        username:Username,
        email:Email,
        password:Password,
    };
    axios.post("http://localhost:8080/addadm",data);
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
        
        <Form.Label className='input'>Password</Form.Label>
        <Row className="mb-3">
        <Form.Group controlId="formBasicEmail" className="col col-sm-10">
            <Form.Control placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
        </Form.Group>
        </Row>
        </div>
        
        </Form>
     
 
      <br/>
      <br/>
      <br/>
     </div>
  )
}

export default Login;