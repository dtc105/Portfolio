import { useState } from "react";

function Login() {

    const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");
    
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
                className="flex flex-col"
            >
                <img 
                    src="avatar.svg" 
                    alt="avatar icon" 
                    className="h-24 aspect-square" 
                />
                <form 
                    action="POST"
                    className="flex flex-col"
                >
                    <input 
                        type="text" 
                        name="username"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="border"
                        placeholder="Username (Optional)"
                    />
                    <input 
                        type="password" 
                        name="password"
                        id="password"
                        className="border text-justify w-full"
                        placeholder="Password (Optional)"
                    />
                    <button
                        onClick={(e) => login(e)}
                        className="border"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;