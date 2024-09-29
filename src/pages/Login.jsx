import { useState } from "react";

function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [focus, setFocus] = useState("");
    
    function login(e) {
        e.preventDefault();
        if (username) {
            localStorage.setItem("username", username);
        } else {
            localStorage.setItem("username", "Guest");
        }
        window.location.reload();
    }
    
    return (
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
                className="w-72 self-start justify-self-center row-start-3 flex flex-col justify-center items-center text-xl gap-4"
                >
                <div id="usernameInput">
                    <p
                        className={`absolute mx-7.5 text-slate-400 cursor-text transition-all bg-white ${focus === "username" || username ? "px-1 -my-4" : "my-4"}`}
                        onClick={() => document.getElementById("username").focus()}
                    >
                        Username
                    </p>
                    <p 
                        className={`absolute w-72 text-right px-7.5 py-4.5 text-base text-slate-400 cursor-text transition-opacity ${(focus === "username" || username) && "opacity-0 pointer-events-none"}`}
                        onClick={() => document.getElementById("username").focus()}
                    >
                        (Optional)
                    </p>
                    <input 
                        type="text" 
                        name="username"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        onFocus={() => setFocus("username")}
                        onBlur={() => setFocus("")}
                        className="w-full h-15 px-7.5 py-1.5 border rounded-full"
                    />
                </div>

                <div id="passwordInput">
                    <p
                        className={`absolute mx-7.5 text-slate-400 cursor-text transition-all bg-white ${focus === "password" || password ? "px-1 -my-4" : "my-4"}`}
                        onClick={() => document.getElementById("password").focus()}
                    >
                        Password
                    </p>
                    <p 
                        className={`absolute w-72 text-right px-7.5 py-4.5 text-base text-slate-400 cursor-text transition-opacity ${(focus === "password" || password) && "opacity-0 pointer-events-none"}`}
                        onClick={() => document.getElementById("password").focus()}
                    >
                        (Optional)
                    </p>
                    <input 
                        type="password" 
                        name="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onFocus={() => setFocus("password")}
                        onBlur={() => setFocus("")}
                        className="w-full h-15 px-7.5 py-1.5 border rounded-full"
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
    );
}

export default Login;