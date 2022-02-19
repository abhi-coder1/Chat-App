import {ChatEngine} from "react-chat-engine";
import './App.css';
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";

function App(){

    if (!localStorage.getItem('username')) return <LoginForm />;

    return (
    <ChatEngine 
        height="100vh"
        projectID="1c0a4247-c552-4971-a585-4faa77f35bc7"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
    />);
}

export default App;