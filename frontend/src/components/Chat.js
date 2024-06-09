import { useEffect, useState } from "react";



function Chat(){

    const [chats, setChats] = useState([]);

    const fetchChats = async()=>{
        const data = await fetch('/api/chat');
        const response = await data.json();

        console.log(response);
        setChats(response);
    }

    useEffect(()=>{
        fetchChats();
    }, [])

    return (
        <div>
            {
                chats.map((chat)=>{
                    return (
                        <div key={chat._id}>{chat.chatName}</div>
                    );
                })
            }
        </div>
    );

}

export default Chat;