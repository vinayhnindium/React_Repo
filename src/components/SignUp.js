import React , {useState}from 'react';


function SignUP({SignUp, error}) {
    const [details, setDetails] = useState({name: "", email: "",  Phone_Number: "", password: "", location: ""});
  
  const submitHandaller = e => {
      e.preventDefault();
      SignUp(details);
  }
    return (
   <form onSubmit={submitHandaller} className="form_class">
       <div className="imgcontainer">
        <img src = "https://www.projectcounter.org/wp-content/uploads/2016/03/icon-register.png" alt="Avatar" className="avatar"/>
        <h2>SignUP</h2>
       </div> 
      
       <div className='form_group'>
       <label htmlFor="uname" ><b>Username: &nbsp;&nbsp;&nbsp;&nbsp;</b></label>      
       <input type = "text" placeholder="Enter Username" name='uname' id='name'  onChange={e => setDetails({...details,name: e.target.value})} value={details.name}  />
       </div>
       <div className='form_group'>
        <label htmlFor="email"><b>Email: &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></label>
        <input type = "email" placeholder="User Email" name='email' id='email' onChange={e => setDetails({...details,email: e.target.value})} value={details.email} />
       </div>
       <div className='form_group'>
        <label htmlFor="PhoneNumber"><b>Phone_Number: &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></label>
        <input type = "text" placeholder="PhoneNumber" name='PhoneNumber' id='PhoneNumber' onChange={e => setDetails({...details,Phone_Number: e.target.value})} value={details.Phone_Number} />
       </div>
       <div className='form_group'>
        <label htmlFor="Location"><b>Location: &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></label>
        <input type = "text" placeholder="Location" name='Location' id='Location' onChange={e => setDetails({...details,location: e.target.value})} value={details.location} />
       </div>
       <div className='form_group'>
       <label htmlFor="psw"><b>Password: &nbsp;&nbsp;&nbsp;&nbsp;</b></label>
       <input type = "password" placeholder="Enter Password" name="psw" id='password' onChange={e => setDetails({...details,password: e.target.value})} value={details.password} />
       </div>
       <div className='buttton_container'  style={{color:"red"}}>
        <button type="submit"><b>SignUp</b></button>             
            {(error != "") ? (<div className='error_div'><b>{error}</b></div>) : ""}
       </div>
      
      
   </form>
  )

}

export default SignUP
