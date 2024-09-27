import { useState } from "react";

function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    function login(e) {
        // e.preventDefault();
        localStorage.setItem("username", username);
    }
    
    return (
        <>
        <div className="absolute border border-black top-1/2 -translate-y-1/2 w-full"></div>
        <div 
            id="loginContainer"
            className="h-full grid grid-rows-login justify-center"
            >
            <img 
                src="avatar.svg" 
                alt="avatar icon" 
                className="h-36 self-end justify-self-center" 
                />
            <form 
                action="POST"
                className="w-72 self-start justify-self-center row-start-3 flex flex-col justify-center items-center text-xl gap-3"
                >
                <div id="usernameInput">
                    {
                        !username &&
                        <p 
                        className="absolute w-72 text-right px-7.5 py-4.5 text-base text-slate-400 cursor-text"
                        onClick={() => document.getElementById("username").focus()}
                        >
                            (Optional)
                        </p>
                    }
                    <input 
                        type="text" 
                        name="username"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full h-15 px-7.5 py-1.5 border rounded-full placeholder:text-slate-400"
                        placeholder="Username"
                        />
                </div>

                <div id="passwordInput">
                    {
                        !password &&
                        <p 
                        className="absolute w-72 text-right px-7.5 py-4.5 text-base text-slate-400 cursor-text"
                        onClick={() => document.getElementById("password").focus()}
                        >
                            (Optional)
                        </p>
                    }
                    <input 
                        type="password" 
                        name="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full h-15 px-7.5 py-1.5 border rounded-full placeholder:text-slate-400"
                        placeholder="Password"
                        />
                </div>
                <button
                    onClick={(e) => login(e)}
                    className="w-4/5 h-15 px-7.5 py-1.5 border rounded-full grid grid-cols-centered items-center"
                    >
                        <span className="col-start-2">Login</span>
                        <img 
                            src="right-arrow.svg" 
                            alt="right arrow" 
                            className="col-start-3 justify-self-end h-7.5"
                        />
                </button>
            </form>
        </div>
        </>
    );
}

export default Login;