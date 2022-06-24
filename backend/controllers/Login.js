const Login = async (req, res) => {
    // Get user input
    const {
      name, email, password,
    } = req.body;
  
    // Validate user input
    if (!(email && password && name)) {
      res.status(400).send('All inputs are required');
    }
  
    for (var i=0;i<global.UserArray.length;i++){
        if(global.UserArray[i].email == email &&   global.UserArray[i].password == password)
        {
            return res.send("User Logged In");
            
        }
    }
    return res.send("User Not Found");
   
   
  
  };
  export default Login;
  