import React from 'react';

class Message extends React.Component{

    render(){
        return(
            <div>
                <small>{this.props.sender}</small>
                <p>{this.props.content}</p>
                <hr/>
            </div>
        );
    }
}

class ChatBox extends React.Component{
    render(){
        return(
            <div>
                <Message sender="Daniel" content="Halo"/>
                <Message sender="Yoimiya" content="Halooo"/>
                <Message sender="Daniel" content="Apa Kabar"/>
            </div>
        )
    }
}

export default ChatBox;