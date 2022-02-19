import { useState } from "react";
import axios from "axios";

const projectID='1c0a4247-c552-4971-a585-4faa77f35bc7';

function LoginForm(){
    const[userName,setUserName]=useState('');
    const[password,setPassword]=useState('');
    const[error,setError]=useState('');

        const handleSubmit = async (event) => {
            event.preventDefault();
            const authObject = {'Project-ID': projectID, 'User-Name': userName, 'User-Secret': password }
            try{
                await axios.get('https://api.chatengine.io/chats',{headers: authObject});
                localStorage.setItem('username',userName);
                localStorage.setItem('password',password);

                window.location.reload();
                setError('');

            }catch(err){
                    setError('Oops,incorrect');
            }
        };
    return(
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} className="input" placeholder="Username" required />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start chatting</span>
                        </button>
                    </div>
                </form>
                <h1>{error}</h1>
            </div>
        </div>
    );
};

export default LoginForm;