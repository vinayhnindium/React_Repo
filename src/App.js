import react, {useState} from 'react';
import LoginForm from './components/LoginForm';


function App() {
  const adminUser = {
    email: "vinay@gmail.com",
    password: "1234"
  }
  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");
 
  const [userSignup, setUserSignup] = useState({name: "", email: "",  Phone_Number: "", password: "", location: ""});
 
  // const SignUP = regesterDetails => {
  //   console.log(regesterDetails);
  //   setUserSignup({
  //     name: regesterDetails.name,
  //     email: regesterDetails.email,
  //     PhoneNumber: regesterDetails.Phone_Number,
  //     Location: regesterDetails.location

  //   });

  // }

  const Login = details => {
    console.log(details);

    if(details.email == adminUser.email && details.password == adminUser.password)
    {
      console.log("logged in");
      setUser({
        name: details.name,
        email: details.email
      });
    }else{
      console.log("details do not match")
      setError("Invalid crediantials");
    }

  }
  const LogOut = () => {
    console.log("Logout");
    setUser({name: "", email:""})
  }

  return (
    <div className="App">
            {(user.email != "" ? (
              <div className='welcome'>
                <h2>welcome, <span>{user.name}</span></h2>
                <button onClick={LogOut}>Logout</button>
              </div>
            ):(
              <LoginForm Login={Login} error={error} />
            ))}
    </div>
  );
}

export default App;
