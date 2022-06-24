const signup = async (req, res) => {
  // Get user input
  const {
    name, email, phone_number, password,location,
  } = req.body;

  // Validate user input
  if (!(email && password && name && phone_number && location)) {
    res.status(400).send('All inputs are required');
  }

  
  global.UserArray = [];  
  global.UserArray.push({username: name, email: email, phone_number : phone_number,password:password,location:location});
 
  return res.send("User Added");

};
export default signup;
