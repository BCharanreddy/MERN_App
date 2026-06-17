import "./login.css";
import { useState } from "react";
import axios from "axios";
import Register from "./Register";
import Dashboard from "./Dashboard";
function Card({name}){
    return(
        <>
            <h1>Hello {name} !</h1>
        </>
    )
}

function Login() {
    const [curUser,setCurUser] = useState(null);
    const [show,setShow] =useState(false);
    const [email,setEmail] =useState("");
    const [password,setPassword]=useState("");
    const handleLogin= async (e)=>{
        e.preventDefault();
        const userData={
            email:email,
            password:password
        };
        try{
            const response=await axios.post(
                "http://localhost:5000/api/login",userData
            );
            if(response.data.message=="success"){
                alert("Hello "+response.data.name);
                // <card name={response.data.name} />
                // setShow(true);
                setCurUser(response.data.name);
            }
            else{
                alert("User Not Found.. Register");
                // <Register/>
                setShow(true);
            }
        }catch(error){
            console.log("error");
            alert(error.response.data.message);
        }
    }
    if(curUser){
        return <Dashboard name={curUser} />
    }
    if(show){
        return <Register/>
    }
    return (
        <div className="login">
        <main>
            <div id="img">
                <div>
                    <h1>Welcome Back</h1>
                    <p>Glad to see you again!.please login to continue your journey</p>
                </div>
            </div>
            <div id="details">
                <div className="heading">
                    <h1>Welcome Back</h1>
                    <p>Login to your account to continue</p>
                </div>

                <form onSubmit={handleLogin}>
                    <label >Email</label>
                    <br/>
                    <input type="email" placeholder="Enter your mail" value={email} onChange={(e)=>setEmail(e.target.value)} />
                    <br/>
                    <label >password</label>
                    <br/>
                    <input type="password" placeholder="Enter your password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                    <br/>
                    <div>
                        <p>
                            <input type="checkbox" />
                            Remember me</p>
                        <span>Forgot Password?</span>
                    </div>
                    <br/>
                    <button type="submit" id="loginBtn">Login</button>

                    <p className="or">or</p>
                    <button>Login With Google</button>

                    <div>
                        <h4>Don't have account..?</h4>
                        <span>Register here</span>
                    </div>

                </form>
            </div>
        </main>
        </div>
    )
}

export default Login;