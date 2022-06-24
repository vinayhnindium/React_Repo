import React , {useState}from 'react';


function LoginForm({Login, error}) {
    const [details, setDetails] = useState({name: "", email: "", password: ""});
  
  const submitHandaller = e => {
      e.preventDefault();
      Login(details);
  }
    return (
   <form onSubmit={submitHandaller}>
       <div className="imgcontainer">
        <img src = "https://cdn2.iconfinder.com/data/icons/essenstial-ultimate-ui/64/avatar-512.png" alt="Avatar" className="avatar"/>
        <h2>Login</h2>
       </div> 
      
       <div className='form_group'>
       <label htmlFor="uname"><b>Username: &nbsp;&nbsp;&nbsp;&nbsp;</b></label>      
       <input type = "text" placeholder="Enter Username" name='uname' id='name' onChange={e => setDetails({...details,name: e.target.value})} value={details.name} />
       </div>
       <div className='form_group'>
        <label htmlFor="email"><b>Email: &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></label>
        <input type = "email" placeholder="User Email" name='email' id='email' onChange={e => setDetails({...details,email: e.target.value})} value={details.email} />
       </div>
       <div className='form_group'>
       <label htmlFor="psw"><b>Password: &nbsp;&nbsp;&nbsp;&nbsp;</b></label>
       <input type = "password" placeholder="Enter Password" name="psw" id='password' onChange={e => setDetails({...details,password: e.target.value})} value={details.password} />
       </div>
       <div className='buttton_container'  style={{color:"red"}}>
        <button type="submit"><b>Login</b></button>             
            {(error != "") ? (<div className='error_div'><b>{error}</b></div>) : ""}
       </div>
      
      
   </form>
  )

}

export default LoginForm
