import React from "react";
import './Chatmessage.css';
import { Avatar } from "../Avatar/Avatar";
// user (user | chatgpt)
// message - aonde vai estar o prompt
{
    user: 'gpt'
    message: 'Hello, how are you?'
}
export const ChatMessage = ({message}) => {
    return (
        <div className= {
            `chat-message ${message.user === 'gpt'} && 
            'chatgpt`}
        >
            <div className="chat-message-center">
                <div className={`avatar ${message.user === 'gpt' && 'chatgpt'}`}>
                    {message.user === 'gpt' && (
                        <Avatar/>
                    )}
                </div>
                <div className="message">
                    {message.message}
                </div>
            </div>
        </div>  
    );
}