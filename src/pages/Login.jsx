import { useState } from "react";

function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    function login(e) {
        // e.preventDefault();
        localStorage.setItem("username", username);
    }
    
    return (
        <div 
            id="loginScreen" 
            className="w-full h-full grid place-content-center"
        >
            <div 
                id="loginContent"
                className="flex flex-col gap-16"
            >
                <img 
                    src="avatar.svg" 
                    alt="avatar icon" 
                    className="h-36 aspect-square" 
                />
                <form 
                    action="POST"
                    className="relative flex flex-col gap-8 justify-center items-center text-xl"
                >
                    <div id="usernameInput" className="w-fit">
                        {
                            !username &&
                            <p 
                                className="absolute text-right text-sm w-full p-5 text-slate-400 cursor-text select-none"
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
                            className="border p-4 placeholder:text-slate-400 rounded-full"
                            placeholder="Username"
                        />
                    </div>

                    <div id="passwordInput">
                        {
                            !password &&
                            <p 
                                className="absolute text-right text-sm w-full p-5 text-slate-400 cursor-text select-none"
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
                            className="border p-4 placeholder:text-slate-400 rounded-full"
                            placeholder="Password"
                        />
                    </div>
                    <button
                        onClick={(e) => login(e)}
                        className="border p-4 rounded-full w-8/12"
                    >
                            <span className="flex justify-center items-center">
                                Login
                            </span>
                            <img 
                                src="right-arrow.svg" 
                                alt="right arrow" 
                                className="absolute h-5 left-4/5 bottom-0 -translate-x-1/2 -translate-y-1/2 my-3"
                            />
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;